import React,{Component} from 'react';
import {  Pie } from "react-chartjs-2";
import './App.css';


export class InventoryHome extends Component{
    state = {
        dataPie: {
            
            datasets: [{
                data: [100, 200, 300, 400],
                backgroundColor:['#33ff33','#ff33ff','#33adff','#ffff33'],
                label: 'Dataset 1'
            }],
            labels: [
                "Men Items",
                "Women Items",
                "Kids Items",
                "Accessory Items",
              ]

        },
        first: "",
        second: "",
        third: "",
        fourth: "",
    }
    handleSubmit = () => {
        const { dataPie } = this.state;
        this.setState({
            dataPie: {
                ...dataPie,
                datasets: [{
                    ...dataPie.datasets,
                    data: [
                    this.state.first,
                     this.state.second,
                      this.state.third,
                       this.state.fourth
                       ]
                }]
            }
        })
    }
    
    handleChange = (evt) => {
        
        let a = parseInt(evt.target.value)
        this.setState({
            [evt.target.name]: a,
        })
        
    }
    
    render(){
        const {dataPie } = this.state;
        console.log(dataPie);
        return (
            <React.Fragment>
                <div className="pieChartHead">
                <input type="number"
                    placeholder="Men Items"
                    value={this.state.first}
                    name="first"
                    onChange={(evt) => this.handleChange(evt)} />
                <input type="number"
                    placeholder="Women Items"
                    value={this.state.second}
                    name="second"
                    onChange={(evt) => this.handleChange(evt)} />
                <input type="number"
                    placeholder="Kids Items"
                    value={this.state.third}
                    name="third"
                    onChange={(evt) => this.handleChange(evt)} />        
                <input type="number"
                    placeholder="Accessories"
                    value={this.state.fourth}
                    name="fourth" onChange={(evt) => this.handleChange(evt)} />
                <button className="btn-info"  onClick={() => this.handleSubmit()}>Add Stock Levels</button>
                </div>
                <h1 className="pie-head">Inventory Overview</h1>
                <Pie  data={dataPie} />
            </React.Fragment>

        )
    }
}