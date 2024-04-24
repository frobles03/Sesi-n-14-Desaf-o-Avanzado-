new Vue({
    el: '#app',
    data: {
        nuevoNombre: '',
        nuevoApellido: '',
        nombres: [
            { nombre: 'Cesar', apellido: 'Robles' },
            { nombre: 'Claudia', apellido: 'Saez' }
        ],
        nombreEditado: null,
        indiceEdicion: -1 
    },
    methods: {
        
        agregarNombre() {
            if (this.validarEntrada(this.nuevoNombre) && this.validarEntrada(this.nuevoApellido)) {
                this.nombres.push({
                    nombre: this.nuevoNombre,
                    apellido: this.nuevoApellido
                });
                this.nuevoNombre = '';
                this.nuevoApellido = '';
            } else {
                alert('Por favor, ingresa un nombre o apellidos.');
            }
        },
        editarNombre(index) {
            this.nombreEditado = { ...this.nombres[index] };
            this.indiceEdicion = index; 
        },
        guardarEdicion() {
            if (this.validarEntrada(this.nombreEditado.nombre) && this.validarEntrada(this.nombreEditado.apellido)) {
                this.nombres.splice(this.indiceEdicion, 1, {
                    nombre: this.nombreEditado.nombre,
                    apellido: this.nombreEditado.apellido
                });
                this.nombreEditado = null;
                this.indiceEdicion = -1; 
            } else {
                alert('Por favor, ingresa un nombre o apellido.');
            }
        },
        validarEntrada(texto) {
            return texto !== '';
        },
        cancelarEdicion() {
            this.nombreEditado = null;
            this.indiceEdicion = -1; 
        },
        eliminarNombre(index) {
            this.nombres.splice(index, 1);
        }
    }
});
