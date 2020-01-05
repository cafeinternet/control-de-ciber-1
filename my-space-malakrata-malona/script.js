var friendCont = $('#friend-container').find('.friend-grid');
friendCont.find('.friend').each(function(i) {
    // top 8
    // work in progress
    var top8 = [{
            name: 'Tom',
            link: 'https://twitter.com/myspacetom',
            avi: 'https://pbs.twimg.com/profile_images/1237550450/mstom.jpg'
        }, {
            name: 'Sl . lova',
            link: 'https://twitter.com/HBOB',
            avi: 'img/sl.jova.jpg'
        }, {
            name: 'Loxe. sl',
            link: 'https://twitter.com/me0wmixgg',
            avi: 'img/loxe.png'
        }, {
            name: 'Lil Miqueila',
            link: 'https://twitter.com/falloutboy',
            avi: 'img/lil.png'
        }, {
            name: 'Aired.sl',
            link: 'http://#',
            avi: 'img/aired.png'
        }, {
            name: 'marinaviridis',
            link: 'http://#',
            avi: 'img/marinaviridis.png'
        }, {
            name: 'JUST.FASHION.SL',
            link: 'https://twitter.com/Skrillex',
            avi: 'img/just.fashion.png'
        }, {
            name: 'shimerxsimmer15',
            link: 'http://#',
            avi: 'img/shimer.png'
        },
        {
            name: 'Natdreamsims',
            link: 'http://#',
            avi: 'img/natdreams.jpg'
        },
        {
            name: 'An.jel.iik',
            link: 'http://#',
            avi: 'img/anjeliik.png'
        },
        {
            name: 'princessjelly.s',
            link: 'img/LILMIQUELA.png',
            avi: 'img/princesjelly.png'
        },
        {
            name: '',
            link: '',
            avi: ''
        }
    ];
    // this should be where are the photos and names are appended
    var tempPhoto = 'http://www.fillcollins.place/32';
    var tempUser = 'Friend '
    $(this).find('.name').attr('href', top8[i].link).text(top8[i].name);
    $(this).find('.photo').attr('src', top8[i].avi);
});
var addComment = $('#triggerComment');
// dates and stuff
var d = new Date();
var month = d.getMonth();
var day = d.getUTCDate().toString();
var year = d.getUTCFullYear().toString();
var dob = '1990-06-28';
var str = dob.split('-');
var firstdate = new Date(str[0], str[1], str[2]);
var dayDiff = Math.ceil(d.getTime() - firstdate.getTime()) / (1000 * 60 * 60 * 24 * 365);
var age = parseInt(dayDiff);

var monthsFull = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
for (i = 0; i < monthsFull.length; i++) {
    if (month == [i]) {
        month = monthsFull[i];
    }
}
var today = month + ' ' + day + ', ' + year;

$('.user-info .identity .details ul').find('li').find('.date').text(today);
$('.user-info .identity .details ul').find('li').find('.age').text(age);

$('.friend-grid .friend').find('.photo').on('click', function() {
    $(this).parent().find('a')[0].click();
});
var commentCount = $('.comment-stream').find('.comment').length;
$('.comments-to-display').find('b:last-child').text(commentCount);
addComment.on('click', comment);

function comment() {
    var commentParent = $('.comment-stream');
    var postDate = today;
    var name = '';
    var img = '#';
    var comment = '';
    var template = '<div class="comment is--posting">\
						<div class="dp-group">\
							<a href="#" class="prof-name">' + name + '</a>\
							<input id="imgUp" name="images" type="file" />\
							<p contenteditable>Name' + name + '</p>\
							<span class="user-status"></span>\
						</div>\
						<div class="comment-cont">\
							<div class="post-info">\
								<span class="date">' + postDate + '</span>\
								<div class="c-actions">\
									<ul class="inline-list">\
										<li><a id="commentSave" href="#">Save Comment</a></li>\
									</ul>\
								</div>\
							</div>\
							<div class="message-body" contenteditable>Lorem Ipsum' + comment + '</div>\
						</div>\
					</div>';
    event.preventDefault();
    commentParent.prepend(template);

    //$('#commentSave')

    $('#imgUp').change(imgUpload);
    // $('.is--posting .dp-group').find('p').on('keyup', function(){
    // 	// var copy = $(this).text();
    // 	name = copy;
    // });
    var copy = $('.is--posting .dp-group').find('p');
    var oldText = copy.text();
    copy.blur(function() {
        if (oldText != $(this).text()) {
            name = $(this).text();
            $('.is--posting').find('.prof-name').text(name);
        }
    });
}

$('.btn').click(function() {
    if ($(this).attr('intent') == 'reply') {
        popup('https://twitter.com/intent/tweet?via=ltrademark', 550, 300);
    } else if ($(this).attr('intent') == 'add') {
        popup('https://twitter.com/intent/follow?screen_name=ltrademark', 550, 620);
    }
});


function imgUpload(e) {
    var inputFiles = this.files;
    if (inputFiles == undefined || inputFiles.length == 0) return;
    var inputFile = inputFiles[0];

    var reader = new FileReader();
    reader.onload = function(event) {
        var image = event.target.result;
        // console.log($(this).parent());
        $('.is--posting .prof-name').after('<img src="' + image + '" alt="profile photo" />');
        $('#imgUp').remove();
    };
    reader.onerror = function(event) {
        console.log(event.target.error.code);
    };
    reader.readAsDataURL(inputFile);
}