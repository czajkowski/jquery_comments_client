$(function () {
    var $commentForm = $("#comment-form"),
        $autorInput = $("[name='author']"),
        $bodyInput = $("[name='body']"),
        $commentList = $("#comment-list"),
        $refreshButton = $("#refresh-button"),
        username = "piotr";
        
    function renderComment (author, body) {
        $commentList.prepend(
            "<div class='comment row'>"
            + "<p class='col-sm-3 comment-author'>" + author + "</p>"
            + "<p class='col-sm-9 comment-body'>" + body + "</p>"
            + "</div>"
        );
    }

    function getDataFromForm () {
        return {
            author: $autorInput.val(),
            body: $bodyInput.val()
        };
    }
    
    function clearForm () {
        $autorInput.val("");
        $bodyInput.val("");
    }
    
    function clearList () {
        $commentList.html("");   
    }
    
    function getCommentsFromServer(callback) {
        $.ajax({
           url : "https://commen-server-czajkowski.c9users.io/comments/" + username,
           method: "get",
           dataType: "json",
           success: callback
        });
    }
    
    function sendNewCommentToServer(author, body, callback) {
        $.ajax({
           url : "https://commen-server-czajkowski.c9users.io/comments/" + username,
           method: "post",
           dataType: "json",
           data: {
               author: author,
               body: body
           },
           success: callback
        });
    }
    
    function loadCommentList(){
        getCommentsFromServer(function (comments) {
            clearList();
    
            comments.forEach(function (comment) {
                  renderComment(comment.author, comment.body);          
            });
        });
    }
    
    $commentForm.submit(function (e) {
        e.preventDefault();    
        
        var formData = getDataFromForm();
        
        clearForm();
        
        sendNewCommentToServer(formData.author, formData.body, function () {
            console.log("Comment saved!");
        });
        
        renderComment(formData.author, formData.body);
    });
    
    
    $refreshButton.click(function (e) {
        e.preventDefault();
        
        loadCommentList();
    });
    
    // Start with loading comments
    loadCommentList();
});