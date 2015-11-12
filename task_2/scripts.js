$(function () {
    var $commentList = $("#comment-list");

    function renderComment (author, body) {
        $commentList.prepend(
            "<div class='comment row'>"
            + "<p class='col-sm-3 comment-author'>" + author + "</p>"
            + "<p class='col-sm-9 comment-body'>" + body + "</p>"
            + "</div>"
        );
    }

    renderComment("jan@kowalski.test", "Dessert liquorice fruitcake dessert muffin. Candy canes cupcake ice cream. Dessert jelly beans danish apple pie. Gummi bears jelly-o croissant cookie sesame snaps sweet danish chocolate cheesecake. Muffin dragée lemon drops oat cake croissant topping caramels pudding sesame snaps. Gingerbread chupa chups liquorice cheesecake marzipan biscuit lemon drops powder candy. Chupa chups soufflé bonbon pie lollipop bonbon chupa chups. Carrot cake pudding gingerbread liquorice oat cake brownie jelly-o chupa chups dragée. Ice cream caramels pie donut danish. Cotton candy apple pie pudding icing pastry.")
    renderComment("kuba@kowalski.test", "Dessert jelly beans danish apple pie. Gummi bears jelly-o croissant cookie sesame snaps sweet danish chocolate cheesecake. Muffin dragée lemon drops oat cake croissant topping caramels pudding sesame snaps. Gingerbread chupa chups liquorice cheesecake marzipan biscuit lemon drops powder candy. Chupa chups soufflé bonbon pie lollipop bonbon chupa chups. Carrot cake pudding gingerbread liquorice oat cake brownie jelly-o chupa chups dragée. Ice cream caramels pie donut danish. Cotton candy apple pie pudding icing pastry.")
    renderComment("janusz@kowalski.test", "Marzipan topping pudding gummi bears cake gummies dragée jelly dragée. Candy sesame snaps bear claw bonbon. Dessert liquorice fruitcake dessert muffin. Candy canes cupcake ice cream. Dessert jelly beans danish apple pie. Gummi bears jelly-o croissant cookie sesame snaps sweet danish chocolate cheesecake. Muffin dragée lemon drops oat cake croissant topping caramels pudding sesame snaps. Gingerbread chupa chups liquorice cheesecake marzipan biscuit lemon drops powder candy. Chupa chups soufflé bonbon pie lollipop bonbon chupa chups. Carrot cake pudding gingerbread liquorice oat cake brownie jelly-o chupa chups dragée. Ice cream caramels pie donut danish. Cotton candy apple pie pudding icing pastry.")

});