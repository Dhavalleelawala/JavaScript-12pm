let monthly_inv_range = document.querySelector('input[name="monthly_inv_range"]');
let rate_range = document.querySelector('input[name="rate_range"]');
let monthlyInvestment = document.getElementById('monthlyInvestment');
let rate = document.getElementById('rate');

// IIF 

(()=>{
    monthlyInvestment.value = monthly_inv_range.value;
    rate.value = rate_range.value
})();

const handleChange = ()=>{
    // console.log(monthly_inv_range.value);
    console.log(parseFloat(rate_range.value));
    monthlyInvestment.value = monthly_inv_range.value;
    rate.value = rate_range.value    

    if(monthly_inv_range.value == 0)
    {
        confirm("Min value 500");
        monthlyInvestment.value = 500;
        monthly_inv_range.value = 500;
    }

}