$(function () {
    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var names = $('input[name="name"]').val();

        var msg = `希望日：${date}\n氏名：${names}`;
        sendMessages(msg);

        return false;
    });
});