// Criação de uma timeline do GSAP com animções sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%', // quando o topo do gatilho atingir 95% do viewport
        end: '70% 50%', // quando o final do gatilho atingir 5% do viewport
        scrub: true, // animação sincronizada com o scroll
        markers: true, // mostra marcadores para debug
        },
    });
tl.to(
    '#fanta',
    {
        top: '120%', // move o elemento para fora da tela para o topo
        left: '0%', // move o elemento para fora da tela para a esquerda
    },
    'orange' // nomeando o nome para sincronização
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%', // move o elemento para o centro da tela
        left: '23%', // move o elemento para o centro da tela
    },
    'orange' // sincroniza com a animação anterior
);

tl.to(
    '#laranja',
    {
        width: '15%', // reduz a largura do elemento com id 'orange'
        top: '160%', // move o elemento para o centro da tela
        right: '10%', // move o elemento para o centro da tela
    },
    'orange' // sincroniza com a animação anterior
);

tl.to(
    '#folha',
    {
        top: '110%', // reduz a largura do elemento com id 'orange'
        rotate: '530deg', // reduz a largura do elemento com id 'orange'
        left: '70%', // move o elemento para o centro da tela
    },
    'orange' // sincroniza com a animação anterior
);

tl.to(
    '#folha2',
    {
        top: '110%', // reduz a largura do elemento com id 'orange'
        rotate: '530deg', // reduz a largura do elemento com id 'orange'
        left: '0%', // move o elemento para o centro da tela
    },
    'orange' // sincroniza com a animação anterior
);

// criando outra timeline para a seção três

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%', // quando o topo do gatilho atingir 95% do viewport
        end: '20% 50%', // quando o final do gatilho atingir 5% do viewport
        scrub: true, // animação sincronizada com o scroll
        markers: true, // mostra marcadores para debug
        },
    });

    // animação para a seção três
tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '210%',
    },
    'ca'
);



    