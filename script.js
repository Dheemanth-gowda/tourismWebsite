function enterSite() {
    console.log("Hello");
    $("#landing").css("transform", "translate(-200vw)");
    $("#dimmed-bg").css("visibility", "visible");
    $("#dimmed-bg").css("transform", "translate(0)");
    $("#full-site").css("visibility", "visible");
    $("#full-site").css("overflow", "auto");
    $("#above-fold").css("opacity", "1")
}