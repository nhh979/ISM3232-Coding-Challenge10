//Hoang Nguyen
//U12840485

function main() {
    // Append a <ul> element to the body
    d3.select('body').append('ul');

    // Create a function to load the data
    function loadData(data){
        d3.select('ul')
                .selectAll('li')
                .data(data)
                .enter().append('li')
                .text(function(data) {
                    return `${data.customerName} - ${data.orderId}: $${data.purchaseAmount}`;
                });
    }

    // Load data from the CSV file and call the 'loadData' function
    d3.dsv(',', '../data/purchase_orders.csv').then(loadData)
}