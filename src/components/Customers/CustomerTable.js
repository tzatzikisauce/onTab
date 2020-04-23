import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Button,
    Alert
} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { withNavigation } from 'react-navigation';


class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Name', 'Tab Total',''],
          tableData: [
            ["Ric Han", '$18.25',''],
            ["Izzy Miles", '$12.50',''],
            ["Maura Winstanley", '$11.30',''],
            ["Eleanor Hightower", '$139.20',''],
            ["Mike Nicolaou", '$18.95',''],
            ["Ian Matheson", '$7.20',''],
            ["Josh Abdullah", '$10.50',''],
            ["Chad Lewis", '$6.50',''],
          ]
        }
      }
     
    

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={styles.btn}>
            <Button
                  title="Close Tab"
                  
                  onPress={() =>
                    this.props.navigation.navigate('Tab')
                  }
                />
            </View>
        );
        
        return (
            <View style={styles.container}>
            <Table borderStyle={{borderColor: 'transparent'}}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                {
                state.tableData.map((rowData, index) => (
                    <TableWrapper key={index} style={styles.row}>
                    {
                        rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                        ))
                    }
                    </TableWrapper>
                ))
                }
            </Table>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
    },

    head: { 
        height: 40 
    },

    text: { 
        margin: 6, 
        color: '#fff', 
        fontSize: 18 
    },

    row: { 
        flexDirection: 'row', 
        backgroundColor: '#30304a', 
        height: 50 
    },

    btn: { 
        width: 100, 
        height: 30, 
        backgroundColor: '#6d6ca8',  
        borderRadius: 2 
    },

    btnText: { 
        textAlign: 'center', 
        color: '#fff' 
    }
    
})


export default withNavigation(CustomerForm);

