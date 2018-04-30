$(document).ready(function () {

    $("#classpresidentsstuff").hide();
    $("#electionstuff").hide();
    $("#membersstuff").hide();
    $("#dormpresidentsstuff").hide();

    $("#classpresidents").click(function () {
        $("#classpresidentsstuff").toggle();
    });

    $("#election").click(function () {
        $("#electionstuff").toggle();
    });
    $("#members").click(function () {
        $("#membersstuff").toggle();
    });
    $("#dormpresidents").click(function () {
        $("#dormpresidentsstuff").toggle();
    });
});