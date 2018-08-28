// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require jquery.remotipart
//= require jquery.min.js
//= require bootstrap.js

//used for sorting starred influencers
function sortlist()
{
    //Get selected value for sorting
    var selectBox = document.getElementById("select_box");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    //sort list based on selected value
    var items = $('#starred_ul > li').get();
    items.sort(function(a,b){

        switch(selectedValue) {
            //Engagemnet(Hign-Low)
            case '0':
                var keyA = $(a).find('div:eq(0)').attr('id').split('|')[0];
                var keyB = $(b).find('div:eq(0)').attr('id').split('|')[0];
                if (parseFloat(keyA) < parseFloat(keyB)) return 1;
                if (parseFloat(keyA) > parseFloat(keyB)) return -1;
                break;
            //Engagemnet(Low-High)
            case '1':
                var keyA = $(a).find('div:eq(0)').attr('id').split('|')[0];
                var keyB = $(b).find('div:eq(0)').attr('id').split('|')[0];
                if (parseFloat(keyA) < parseFloat(keyB)) return -1;
                if (parseFloat(keyA) > parseFloat(keyB)) return 1;
                break;
            //Followers(Hign-Low)
            case '2':
                var keyA = $(a).find('div:eq(0)').attr('id').split('|')[1];
                var keyB = $(b).find('div:eq(0)').attr('id').split('|')[1];
                if (parseFloat(keyA) < parseFloat(keyB)) return 1;
                if (parseFloat(keyA) > parseFloat(keyB)) return -1;
                break;
             //Followers(Low-High)
            case '3':
                var keyA = $(a).find('div:eq(0)').attr('id').split('|')[1];
                var keyB = $(b).find('div:eq(0)').attr('id').split('|')[1];
                if (parseFloat(keyA) < parseFloat(keyB)) return -1;
                if (parseFloat(keyA) > parseFloat(keyB)) return 1;
                break;
            default:
                return 0;
        }

    });
    var ul = $('#starred_ul');
    $.each(items, function(i, li){
        ul.append(li); /* This removes li from the old spot and moves it */
    });
}
