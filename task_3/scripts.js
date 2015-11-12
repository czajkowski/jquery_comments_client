$(function () {
    var $commentList = $("#comment-list"),
        $commentForm = $("#comment-form"),
        $autorInput = $("[name='author']"),
        $bodyInput = $("[name='body']");

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

    $commentForm.submit(function (e) {
        e.preventDefault();

        var formData = getDataFromForm();

        clearForm();

        renderComment(formData.author, formData.body);
    });

});