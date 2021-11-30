const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout1.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }]
    },

    {
        path: '/farmaceutico',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () =>
                    import ('pages/farmaceutico/Index.vue')
            },
            {
                path: 'medicamentos',
                component: () =>
                    import ('src/pages/farmaceutico/medicamentos.vue')
            },
            {
                path: 'Lista-pagamentos',
                component: () =>
                    import ('src/pages/farmaceutico/pagamentos.vue')
            },
            {
                path: 'estatistica',
                component: () =>
                    import ('src/pages/farmaceutico/estatisticas.vue')
            },
        ]
    },

    {
        path: '/utente',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/utente/Index.vue')
            },
            {
                path: 'lista_medicamentos',
                component: () =>
                    import ('src/pages/utente/lista_medicamentos.vue')
            },
            {
                path: 'categorias',
                component: () =>
                    import ('src/pages/utente/categorias.vue')
            },
            {
                path: 'farmacias',
                component: () =>
                    import ('src/pages/utente/farmacias.vue')
            },
            {
                path: 'medicamento_farmacia',
                component: () =>
                    import ('src/pages/utente/compra_medicamento.vue')
            },
            {
                path: 'cate_medicamento',
                component: () =>
                    import ('src/pages/utente/cate_medicamento.vue')
            },
            {
                path: 'detalhes_medicamento',
                component: () =>
                    import ('src/pages/utente/detalhes_medicamento.vue')
            },
            {
                path: 'pagamentos',
                component: () =>
                    import ('src/pages/utente/pagamentos.vue')
            },
            {
                path: 'payment',
                component: () =>
                    import ('src/pages/utente/payment.vue')
            },
            {
                path: 'produto_farmacia',
                component: () =>
                    import ('src/pages/utente/produto_farmacia.vue')
            },

            //MEDICAMENTOS
            {
                path: 'paracetamol',
                component: () =>
                    import ('src/pages/utente/medicamentos/paracetamol.vue')
            },
            {
                path: 'acarboze',
                component: () =>
                    import ('src/pages/utente/medicamentos/acarboze.vue')
            },
            {
                path: 'amicacina',
                component: () =>
                    import ('src/pages/utente/medicamentos/amicacina.vue')
            },
            {
                path: 'benzocaina',
                component: () =>
                    import ('src/pages/utente/medicamentos/benzocaina.vue')
            },
            {
                path: 'betaina',
                component: () =>
                    import ('src/pages/utente/medicamentos/betaina.vue')
            },
            {
                path: 'cantaridina',
                component: () =>
                    import ('src/pages/utente/medicamentos/cantaridina.vue')
            },

            //FARMACIAS
            {
                path: 'casaDoPovo',
                component: () =>
                    import ('src/pages/utente/casaDoPovo/medicamentos.vue')
            },
            {
                path: 'orquidia',
                component: () =>
                    import ('src/pages/utente/orquidia/medicamentos.vue')
            },
            {
                path: 'onlyOne',
                component: () =>
                    import ('src/pages/utente/onlyOne/medicamentos.vue')
            },
            {
                path: 'laboratorio',
                component: () =>
                    import ('src/pages/utente/laboratorio.vue')
            },
            {
                path: 'laboratorio1',
                component: () =>
                    import ('src/pages/utente/laboratorio1.vue')
            },



        ]
    },

    {
        path: '/administrador',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('src/pages/Administrador/Index.vue')
            },
            {
                path: 'cadastro',
                component: () =>
                    import ('src/pages/Administrador/cadastroFarmacias.vue')
            },

        ]
    },

    {
        path: '/account',
        component: () =>
            import ('layouts/MainLayout1.vue'),
        children: [{
                path: 'login',
                component: () =>
                    import ('src/pages/account/Login.vue')
            },
            {
                path: 'signup',
                component: () =>
                    import ('src/pages/account/SignUp.vue')
            },
            {
                path: 'confirm',
                component: () =>
                    import ('src/pages/account/Confirm.vue')
            },
            

        ]
    },



    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes