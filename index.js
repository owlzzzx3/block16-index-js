// Starter code
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// Function to calculate the refill total cost
function calculateRefillCost(customer) {
    const refillTotalCost = customer.pricePerRefill * customer.refills;
    return refillTotalCost;
}

// Function to calculate the subscription discount
function calculateSubscriptionDiscount(refillTotalCost, customer) {
    if (customer.subscription) {
        const subscriptionDiscount = refillTotalCost * 0.25;
        return subscriptionDiscount;
    }
    return 0;
}

// Function to calculate the coupon discount
function calculateCouponDiscount(subscriptionDiscount, customer) {
    if (customer.coupon) {
        const couponDiscount = 10;
        return couponDiscount;
    }
    return 0;
}

// Function to calculate the final amount
function calculateFinalAmount(refillTotalCost, subscriptionDiscount, couponDiscount) {
    const finalAmount = refillTotalCost - subscriptionDiscount - couponDiscount;
    return finalAmount;
}

// Function to log the final amount
function logFinalAmount(finalAmount) {
    console.log(`Your grand total is $${finalAmount.toFixed(2)}.`);
}

// Testing the functions with the customer objects
const timmyRefillTotalCost = calculateRefillCost(timmy);
const timmySubscriptionDiscount = calculateSubscriptionDiscount(timmyRefillTotalCost, timmy);
const timmyCouponDiscount = calculateCouponDiscount(timmySubscriptionDiscount, timmy);
const timmyFinalAmount = calculateFinalAmount(timmyRefillTotalCost, timmySubscriptionDiscount, timmyCouponDiscount);
logFinalAmount(timmyFinalAmount);

const sarahRefillTotalCost = calculateRefillCost(sarah);
const sarahSubscriptionDiscount = calculateSubscriptionDiscount(sarahRefillTotalCost, sarah);
const sarahCouponDiscount = calculateCouponDiscount(sarahSubscriptionDiscount, sarah);
const sarahFinalAmount = calculateFinalAmount(sarahRefillTotalCost, sarahSubscriptionDiscount, sarahCouponDiscount);
logFinalAmount(sarahFinalAmount);

const rockyRefillTotalCost = calculateRefillCost(rocky);
const rockySubscriptionDiscount = calculateSubscriptionDiscount(rockyRefillTotalCost, rocky);
const rockyCouponDiscount = calculateCouponDiscount(rockySubscriptionDiscount, rocky);
const rockyFinalAmount = calculateFinalAmount(rockyRefillTotalCost, rockySubscriptionDiscount, rockyCouponDiscount);
logFinalAmount(rockyFinalAmount);
