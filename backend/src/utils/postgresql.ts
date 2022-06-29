import DriverInterfaz from "../interfaces/driver_db"
import {Pool, PoolClient, QueryResult} from "pg"
import dotEnv from "dotenv"
import path from "path"
dotEnv.config({ path: path.resolve(__dirname, '../.env') })

let {NODE_ENV,DB_HOST,DB_PORT,DB_USER,DB_PASS,DB_NAME_PRO,DB_NAME_DEV} = process.env
const DB= (NODE_ENV==="test")? DB_NAME_DEV : DB_NAME_PRO

class PostgreSql implements DriverInterfaz{

    host: string
    port: string
    db_name: string
    user: string
    pass: string
    config: Object
    pool: Pool

    constructor(){
        this.host=(DB_HOST)? DB_HOST as string: ""
        this.port=(DB_PORT)? DB_PORT as string: ""
        this.db_name=(DB)? DB as string: ""
        this.user=(DB_USER)? DB_USER as string: ""
        this.pass=(DB_PASS)? DB_PASS as string: ""
        this.config={
            host: this.host,
            port: this.port,
            database: this.db_name,
            user: this.user,
            password: this.pass
        }
        this.pool=new Pool(this.config)
    }

    setHost(host_:string){
        this.host=host_
    }

    setPort(port_:string){
        this.port=port_
    }

    setDBame(db_name_:string){
        this.db_name=db_name_
    }

    setUser(user_:string){
        this.user=user_
    }

    setPass(pass_:string){
        this.pass=pass_
    }
    

    async conectar():Promise<PoolClient>{
        let cliente:PoolClient= await this.pool.connect()
        return cliente
    }

    async query(cliente:PoolClient,SQL:string,datos?:any[]):Promise<QueryResult>{
        if(datos){
            let result:QueryResult=await cliente.query(SQL,datos)
            return result
        }
        else{
            let result:QueryResult=await cliente.query(SQL)
            return result
        }
        

    }
    
    async cerrarConexion(cliente:PoolClient):Promise<void>{
        cliente.release()
        this.pool.end()
    }

}

export default PostgreSql