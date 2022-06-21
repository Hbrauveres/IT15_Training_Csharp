import {Cliente} from './Cliente.js'
import {ClienteFisico} from './ClienteFisico.js'
import {ClienteJuridico} from './ClienteJuridico.js'
import {CadastroClientes} from './CadastroClientes.js'

let clientes = new CadastroClientes();

clientes.adicionarCliente(new ClienteFisico("João", 20, 1000));
clientes.adicionarCliente(new ClienteFisico("Maria", 30, 2000));
clientes.adicionarCliente(new ClienteFisico("José", 40, 3000));
clientes.adicionarCliente(new ClienteFisico("Pedro", 50, 4000));
clientes.adicionarCliente(new ClienteFisico("João", 60, 5000));
clientes.adicionarCliente(new ClienteFisico("Alessandra", 70, 6000));

clientes.adicionarCliente(new ClienteJuridico("Empresa A", 1000));
clientes.adicionarCliente(new ClienteJuridico("Empresa B", 2000));
clientes.adicionarCliente(new ClienteJuridico("Empresa C", 3000));
clientes.adicionarCliente(new ClienteJuridico("Empresa D", 4000));

console.log(clientes.listarClientes());
console.log(clientes.getNomeMensalidade());