$(document).ready(function () {
    
    $("#skillsDiv").css("opacity", "1");

    $("#skills-tab").click(function () {
        $("#skillsDiv").css("display", "block").animate({ opacity: 1 }, 500);
        $("#toolsDiv").animate({ opacity: 0 }, 500, function () {
            $(this).css("display", "none");
        });
        $("#skills-tab").addClass("active");
        $("#tools-tab").removeClass("active");
    });

    $("#tools-tab").click(function () {
        $("#toolsDiv").css("display", "block").animate({ opacity: 1 }, 500);
        $("#skillsDiv").animate({ opacity: 0 }, 500, function () {
            $(this).css("display", "none");
        });
        $("#skills-tab").removeClass("active");
        $("#tools-tab").addClass("active");
    });
});

