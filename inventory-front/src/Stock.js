import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Stock extends Component{

    constructor(props){
        super(props);

        this.state={
            stocks:[],
            modalTitle:"",
            StockID:0,
            StockType:"",
            SupplierID:"",
            DateOfRecieved:""
        }
    }

    refreshList(){

        fetch(variables.API_URL+'stock')
        .then(response=>response.json())
        .then(data=>{
            this.setState({stocks:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeStockType =(e)=>{
        this.setState({StockType:e.target.value});
    }
    changeSupplierID =(e)=>{
        this.setState({SupplierID:e.target.value});
    }
    changeDateOfRecieved =(e)=>{
        this.setState({DateOfRecieved:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Stock",
            StockID:0,
            StockType:"",
            SupplierID:"",
            DateOfRecieved:""
        });
    }
    editClick(sto){
        this.setState({
            modalTitle:"Edit Stock",
            StockID:sto.StockID,
            StockType:sto.StockType,
            SupplierID:sto.SupplierID,
            DateOfRecieved:sto.DateOfRecieved
        });
    }

    createClick(){
        fetch(variables.API_URL+'stock',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StockType:this.state.StockType,
                SupplierID:this.state.SupplierID,
                DateOfRecieved:this.state.DateOfRecieved,
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'stock',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StockID:this.state.StockID,
                StockType:this.state.StockType,
                SupplierID:this.state.SupplierID,
                DateOfRecieved:this.state.DateOfRecieved,
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'stock/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }

    render(){
        const {
            stocks,
            modalTitle,
            StockID,
            StockType,
            SupplierID,
            DateOfRecieved
           
        }=this.state;

        return(
<div>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Stock
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            StockID
        </th>
        <th>
            StockType
        </th>
        <th>
            SupplierID
        </th>
        <th>
            DateOfRecieved
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {stocks.map(sto=>
            <tr key={sto.StockID}>
                <td>{sto.StockID}</td>
                <td>{sto.StockType}</td>
                <td>{sto.SupplierID}</td>
                <td>{sto.DateOfRecieved}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(sto)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(sto.StockID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    
        <div className="input-group mb-3">
            <span className="input-group-text">Stock Type</span>
            <select className="form-select" value={StockType} onChange={this.changeStockType}>
            <option > </option>
            <option value="readymade cloths">Readymade Cloths</option>
            <option value="Imported Cloths">Imported Cloths</option>
            <option value="Accessory Items">Accessory Items</option>
            <option value="other">Other</option>
            </select>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Supplier ID</span>
            <input type="text" className="form-control"
            value={SupplierID}
            onChange={this.changeSupplierID}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Date</span>
            <input type="date" className="form-control"
            value={DateOfRecieved}
            onChange={this.changeDateOfRecieved}/>
        </div>

    

    {StockID===0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {StockID!==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
   </div>

</div>
</div> 
</div>


</div>
        )
    }
}