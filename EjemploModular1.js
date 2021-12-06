var Formulas = (function() {
    var iva = 0.19;

    return {
        venta: {
            calcularIva: function(monto) {
                return monto * iva;
            },
            calcularMontoSinIva: function(monto) {
                return monto / (1 + iva);
            },
            calcularUtilidad: function(costo, ingreso) {
                return ingreso - costo;
            }
        },
        financiera: {
            calcularTasaEfectivaAnual: function(capital, interes, periodos) {
                return capital * Math.pow(1 + interes, periodos);
            }
        }
    };
})();

//Para llamar el metodo.
/*Formulas.venta.calcularMontoSinIva(400); // 336.1344537815126
Formulas.venta.calcularIva(400); // 76
Formulas.venta.calcularUtilidad(400000, 1000000); // 600000
Formulas.financiera.calcularTasaEfectivaAnual(10000, 0.05, 2); // 11025*/
console.log(Formulas.venta.calcularUtilidad(400000, 1000000));