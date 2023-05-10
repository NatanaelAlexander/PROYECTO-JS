window.addEventListener("load", () => {

    $('.bxslider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: false,
        pager: false,
        slideWidth: 10000
    });
    //post
    var posts = [
        {
            title: 'prueba de titlo',
            date: 'Fecha de publicación: ' + moment().format("MMM dddd Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu lacus in tortor pretiume fficitur.Cras id rhoncus magna.In et mollis ex.Donec tempus lectus sed quam aliquam, euismod dictum sapien vehicula.Proin semper ipsum a magna ultricies faucibus.In hac habitasse plateadictumst.Vivamus id nibh non dui euismod tincidunt vitae sit amet nisi.Duis sagittis nislvitae risus ornare, at condimentum ligula ultricies.Praesent malesuada eget lectus idfacilisis.Etiam lorem orci, suscipit sit amet volutpat in, aliquam non purus.Proin congue,lectus at sodales euismod, ipsum magna accumsan nisi, dignissim tincidunt orci augue eu dui.Suspendisse sapien nisi, porta hendrerit ultrices nec, vehicula quis sem.Praesent massa dui,aliquam et lorem eu, egestas facilisis od'
        },
        {
            title: 'prueba de titlo',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu lacus in tortor pretiume fficitur.Cras id rhoncus magna.In et mollis ex.Donec tempus lectus sed quam aliquam, euismod dictum sapien vehicula.Proin semper ipsum a magna ultricies faucibus.In hac habitasse plateadictumst.Vivamus id nibh non dui euismod tincidunt vitae sit amet nisi.Duis sagittis nislvitae risus ornare, at condimentum ligula ultricies.Praesent malesuada eget lectus idfacilisis.Etiam lorem orci, suscipit sit amet volutpat in, aliquam non purus.Proin congue,lectus at sodales euismod, ipsum magna accumsan nisi, dignissim tincidunt orci augue eu dui.Suspendisse sapien nisi, porta hendrerit ultrices nec, vehicula quis sem.Praesent massa dui,aliquam et lorem eu, egestas facilisis od'
        },
        {
            title: 'prueba de titlo',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu lacus in tortor pretiume fficitur.Cras id rhoncus magna.In et mollis ex.Donec tempus lectus sed quam aliquam, euismod dictum sapien vehicula.Proin semper ipsum a magna ultricies faucibus.In hac habitasse plateadictumst.Vivamus id nibh non dui euismod tincidunt vitae sit amet nisi.Duis sagittis nislvitae risus ornare, at condimentum ligula ultricies.Praesent malesuada eget lectus idfacilisis.Etiam lorem orci, suscipit sit amet volutpat in, aliquam non purus.Proin congue,lectus at sodales euismod, ipsum magna accumsan nisi, dignissim tincidunt orci augue eu dui.Suspendisse sapien nisi, porta hendrerit ultrices nec, vehicula quis sem.Praesent massa dui,aliquam et lorem eu, egestas facilisis od'
        },
        {
            title: 'prueba de titlo',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu lacus in tortor pretiume fficitur.Cras id rhoncus magna.In et mollis ex.Donec tempus lectus sed quam aliquam, euismod dictum sapien vehicula.Proin semper ipsum a magna ultricies faucibus.In hac habitasse plateadictumst.Vivamus id nibh non dui euismod tincidunt vitae sit amet nisi.Duis sagittis nislvitae risus ornare, at condimentum ligula ultricies.Praesent malesuada eget lectus idfacilisis.Etiam lorem orci, suscipit sit amet volutpat in, aliquam non purus.Proin congue,lectus at sodales euismod, ipsum magna accumsan nisi, dignissim tincidunt orci augue eu dui.Suspendisse sapien nisi, porta hendrerit ultrices nec, vehicula quis sem.Praesent massa dui,aliquam et lorem eu, egestas facilisis od'
        }, {
            title: 'prueba de titlo',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu lacus in tortor pretiume fficitur.Cras id rhoncus magna.In et mollis ex.Donec tempus lectus sed quam aliquam, euismod dictum sapien vehicula.Proin semper ipsum a magna ultricies faucibus.In hac habitasse plateadictumst.Vivamus id nibh non dui euismod tincidunt vitae sit amet nisi.Duis sagittis nislvitae risus ornare, at condimentum ligula ultricies.Praesent malesuada eget lectus idfacilisis.Etiam lorem orci, suscipit sit amet volutpat in, aliquam non purus.Proin congue,lectus at sodales euismod, ipsum magna accumsan nisi, dignissim tincidunt orci augue eu dui.Suspendisse sapien nisi, porta hendrerit ultrices nec, vehicula quis sem.Praesent massa dui,aliquam et lorem eu, egestas facilisis od'
        },
    ];
    //SELECTOR DE THEME
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "style/green.css");
    });
    $("#to-red").click(function () {
        theme.attr("href", "style/red.css");
    });
    $("#to-blue").click(function () {
        theme.attr("href", "style/blue.css");
    });



    posts.forEach((item, index) => {
        var post = `

        <article class="post">
        
        <h2>${item.title + " " + (index + 1)}</h2>
        
        <span class="date">${item.date}</span>
        
        <p>
        
        ${item.content}
        
        </p>
        
        <a href="#" class="button-more">Leer más</a>
        
        </article>
        
        `;
        $("#posts").append(post);
    });



    //Scroll subir
    $(".subir").click(function (e) {
        e.preventDefauld();
        $('html', "body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    //login falso

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        $("#login").html("<br> <strong>Bienvenido, " + form_name + "</strong> <br> <a href='#'s>Cerrar sesion</a>");
        $("#login a").click(function () {
            localStorage.clear();
            location.reload();
        });
    }
}); 