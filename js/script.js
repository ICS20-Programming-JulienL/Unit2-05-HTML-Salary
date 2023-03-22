// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: March 20 2023
// This file contains the JS functions for index.html

"use strict";

function enterClicked() {
  // taxrate
  const TAXRATE = 0.2005
  // get how many hours that the user worked
  let hoursWorked= parseFloat(document.getElementById("hours-worked").value)

	// get the hourly pay from the user
  let hourlyPay= parseFloat(document.getElementById("hourly-pay").value)

  //calculate the pay  
  let totalPay= hoursWorked*hourlyPay
  //calculate the taxes
  let taxes= totalPay*TAXRATE
   //calculate the net income
  let netIncome= totalPay-taxes


  // display the user's pay
  
  document.getElementById('answer1').innerHTML = "Your pay is $" +netIncome.toFixed(2);
  // display how much the government will pay
  document.getElementById('answer2').innerHTML = "The government will take $"+taxes.toFixed(2) 
}

