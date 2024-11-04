function isSpecificWidth() {
    return window.innerWidth === 1920; // Verifica se a largura é exatamente 1920px
}

function initAnimations() {
    if (isSpecificWidth()) {
        setupNavAnimations();
        setupMainAnimations();
        setupQuadradoAnimations();
        setupButtonAnimations();
        setupScrollAnimations();
        setupMouseMoveAnimations();
    }
}

function setupNavAnimations() {
    const sobre = document.getElementById("sobre");
    const projetos = document.getElementById("projetos");
    const contato = document.getElementById("contato");

    function colornavDentro1() {
        sobre.style.color = "#6f36ff";
        sobre.style.fontSize = "1.1rem";
        sobre.style.transition = "1s";
    }

    function colornavfora1() {
        sobre.style.color = "white";
        sobre.style.fontSize = "1.2rem";
        sobre.style.transition = "0.3s";
    }

    function colornavDentro2() {
        projetos.style.color = "#6f36ff";
        projetos.style.fontSize = "1.1rem";
        projetos.style.transition = "1s";
    }

    function colornavfora2() {
        projetos.style.color = "white";
        projetos.style.fontSize = "1.2rem";
        projetos.style.transition = "0.3s";
    }

    function colornavDentro3() {
        contato.style.color = "#6f36ff";
        contato.style.fontSize = "1.1rem";
        contato.style.transition = "1s";
    }

    function colornavfora3() {
        contato.style.color = "white";
        contato.style.fontSize = "1.2rem";
        contato.style.transition = "0.3s";
    }

    // Eventos
    sobre.addEventListener('mouseenter', colornavDentro1);
    sobre.addEventListener('mouseleave', colornavfora1);
    projetos.addEventListener('mouseenter', colornavDentro2);
    projetos.addEventListener('mouseleave', colornavfora2);
    contato.addEventListener('mouseenter', colornavDentro3);
    contato.addEventListener('mouseleave', colornavfora3);
}

function setupMainAnimations() {
    const eclipse = document.getElementById("eclipse");
    const mudarcorTexto = document.getElementById("texto_muda");
    const pablotitulo = document.getElementById("pablotitulo");
    const andradetitulo = document.getElementById("andradetitulo");

    function eclipseAnimation() {
        eclipse.style.transition = "2s";
        eclipse.style.transform = "rotate(190deg)";
        eclipse.style.width = "30rem";
    }

    function eclipseeAnimation() {
        eclipse.style.transition = "2s";
        eclipse.style.transform = "rotate(0deg)";
        eclipse.style.width = "28rem";
    }

    function mover() {
        mudarcorTexto.style.color = "purple";
        mudarcorTexto.style.transition = "1s";
        mudarcorTexto.style.fontSize = "1.8rem";
    }

    function moverfora() {
        mudarcorTexto.style.transition = "1s";
        mudarcorTexto.style.color = "#4700FF";
        mudarcorTexto.style.fontSize = "1.5rem";
    }

    function pablomove() {
        pablotitulo.style.color = "#4700FF";
        pablotitulo.style.transition = "1s";
        pablotitulo.style.fontSize = "6.5rem";
    }

    function pabloout() {
        pablotitulo.style.color = "#303030";
        pablotitulo.style.transition = "0.3s";
        pablotitulo.style.fontSize = "6rem";
    }

    function andrademove() {
        andradetitulo.style.color = "#4700FF";
        andradetitulo.style.transition = "1s";
        andradetitulo.style.fontSize = "6.5rem";
    }

    function andradeout() {
        andradetitulo.style.color = "#303030";
        andradetitulo.style.transition = "0.3s";
        andradetitulo.style.fontSize = "6rem";
    }

    // Eventos
    eclipse.addEventListener('mouseenter', eclipseAnimation);
    eclipse.addEventListener('mouseleave', eclipseeAnimation);
    mudarcorTexto.addEventListener('mouseenter', mover);
    mudarcorTexto.addEventListener('mouseleave', moverfora);
    pablotitulo.addEventListener('mouseenter', pablomove);
    pablotitulo.addEventListener('mouseleave', pabloout);
    andradetitulo.addEventListener('mouseenter', andrademove);
    andradetitulo.addEventListener('mouseleave', andradeout);
}

function setupQuadradoAnimations() {
    for (let i = 1; i <= 4; i++) {
        const quadrado = document.getElementById(`quadrado${i}`);

        function quadradodentro() {
            quadrado.style.width = "300px";
            quadrado.style.borderRadius = "2.5rem";
            quadrado.style.transition = "1s";
        }

        function quadradofora() {
            quadrado.style.width = "250px";
            quadrado.style.borderRadius = "1.5rem";
            quadrado.style.transition = "1.5s";
        }

        // Eventos
        quadrado.addEventListener('mouseenter', quadradodentro);
        quadrado.addEventListener('mouseleave', quadradofora);
    }
}

function setupButtonAnimations() {
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`btnacessar${i}`);
        const line = document.getElementById(`line10${i}`);

        function btndentro() {
            btn.style.width = "160px";
            btn.style.padding = "2px";
            btn.style.transition = "1s";
            btn.style.border = "1px solid rgb(50, 50, 255)";
            line.style.width = "120px";
            line.style.transition = "3s";
        }

        function btnfora() {
            btn.style.width = "130px";
            btn.style.transition = "1s";
            btn.style.border = "none";
            btn.style.padding = "0px";
            line.style.width = "70px";
            line.style.transition = "2s";
        }

        // Eventos
        btn.addEventListener('mouseenter', btndentro);
        btn.addEventListener('mouseleave', btnfora);
    }
}

function setupScrollAnimations() {
    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');
        const linha = document.getElementById("linha-roxa");
        const color1 = document.getElementById("sobre");
        const color2 = document.getElementById("projetos");
        const color3 = document.getElementById("contato");

        if (window.scrollY > 0) {
            linha.style.display = "none"; // Esconde a linha
            header.classList.add('header-scrolled');
            header.style.borderRadius = "2rem";
            header.style.transition = "2s";
            header.style.width = "400px";
            header.style.left = "40%";
            header.style.opacity = "50%";
            color1.style.color = "white";
            color2.style.color = "white";
            color3.style.color = "white";
        } else {
            header.classList.remove('header-scrolled');
            header.style.width = "500px";
            header.style.left = "38%";
            header.style.opacity = "100%";
            color1.style.color = "white";
            color2.style.color = "white";
            color3.style.color = "white";
            header.style.border = "none";
            linha.style.display = "initial";
        }
    });
}

function setupMouseMoveAnimations() {
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
}

// Verifica a largura da tela ao carregar e ao redimensionar
window.addEventListener('load', initAnimations);
window.addEventListener('resize', initAnimations);
