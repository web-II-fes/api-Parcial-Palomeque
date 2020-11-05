import {Schema, model} from 'mongoose';

const schemaPedido = new Schema({
    nombreCliente: String,
    direccionEntrega: String,
    pedido: String,
    fechaEntrega: Date

});

export let pedidoSchema = model('Pedido', schemaPedido,'pedidos');