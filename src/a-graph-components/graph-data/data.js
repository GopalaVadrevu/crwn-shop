const MetaData = [
    //Nodes
    {
        id: "1",
        data:{
            label:"Study",
            type:"Entity"
            },
        //to be calculated based on the react flow grid sizd
        position: { x: 50, y: 25 }
    },
    {
        id: "2",
        data:{
            label:"Sample",
            type:"Entity"
            },
        position: { x: 300, y: 300 },
    },
    {
        id: "3",
        data:{
            label:"Organism",
            type:"Entity"
            },
        position: { x: 700, y: 300 },

    },
    {
        id: "4",
        data:{
            label:"Chemical Compound",
            type:"Entity"
            },
        position: { x: 500, y: 300 },
    },
    {
        id: "5",
        data:{
            label:"RNA",
            type:"Entity"
            },
        position: { x: 550, y: 25 }
    },
    {
        id: "6",
        data:{
            label:"Gene",
            type:"Entity"
            },
        position: { x: 350, y: 25 }
    },
    {
        id: "7",
        data:{
            label:"Protein",
            type:"Entity"
            },
        position: { x: 800, y: 50 }
    },
    //Edges
    {id: "1", source: "1", target:"2",label:"study-to-sample", data:{type:"Relation",label:"study-to-sample",}},
    {id: "2", source: "1", target:"3", label:"study-to-organism",data:{type:"Relation",label:"study-to-organism"}},
    {id: "3", source: "3", target:"6", label: "organism-to-Gene",data:{type:"Relation",label:"organism-to-Gene"}},
    {id: "4", source: "2", target:"5", label:"sample-to-rna",data:{type:"Relation",label:"sample-to-rna"}},
    {id: "5", source: "7", target:"4", label: "protein-to-compound",data:{type:"Relation",abel: "protein-to-compound"}}



];


export default MetaData;


