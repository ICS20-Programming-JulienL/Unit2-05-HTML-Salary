// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: March 20 2023
// This file contains the JS functions for index.html

"use strict";

function enterClicked() {
  // taxrate
  const TAXRATE = 0.2005
  // get the hours worked from the user
  let hoursWorked= parseFloat(document.getElementById("hoursWorked").value)

	// get the hourly pay from the user
  let hourlyPay= parseFloat(document.getElementById("hourlyPay").value)

  //caculate the pay  
  let totalPay= hoursWorked*hourlyPay
  //caculate the taxes
  let taxes= totalPay*TAXRATE
   //caculate the net income
  let netIncome= totalPay-taxes


  // display the user's pay
  
  document.getElementById('answer1').innerHTML = "Your pay is $" +netIncome.toFixed(2);
  // display how much the gouvernment will pay
  document.getElementById('answer2').innerHTML = "The gouvernment will take $"+taxes.toFixed(2) 
}

