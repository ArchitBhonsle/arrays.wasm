pub mod iteration;
pub mod new;
pub mod serde;
pub mod stats;
pub mod utils;

use ndarray::{arr1, s, Array1, Axis};
use wasm_bindgen::prelude::*;

use crate::macros::apply;
use crate::{
    one_dimensional_basic_methods, one_dimensional_interop_methods, one_dimensional_math_methods,
    vectors_sampling_methods,
};

#[wasm_bindgen]
#[derive(Clone)]
pub struct FloatsVector {
    #[wasm_bindgen(skip)]
    pub data: Array1<f64>,
}

one_dimensional_interop_methods!(FloatsVector, f64);
one_dimensional_basic_methods!(FloatsVector, f64);
one_dimensional_math_methods!(FloatsVector, f64);
vectors_sampling_methods!(FloatsVector);

use std::ops::*;

apply::zero!(FloatsVector {
    floor
    "Computes the largest integer less than equal to the number",

    ceil
    "Computes the smallest integer greater than equal to the number",

    round
    "Computes the closest integer to the number",

    trunc
    "Computes only the integer part of the number",

    fract
    "Computes only the fraction part of the number",

    abs
    "Computes the absolute value of the number",

    signum
    "Changes the element 1.0 if the number is positive, +0.0 or INFINITY, \
     -1 if negative, -0.0 or NEG_INFINITY and NAN if NAN",

    sqrt
    "Computes the square root of the element",

    cbrt
    "Computes the cube root of the element",

    exp
    "Computes `e^element`",

    exp2
    "Computes `2^element`",

    ln
    "Computes the natural logarithm of the element",

    log2
    "Computes the base 2 logarithm of the element",

    log10
    "Computes the base 10 logarithm of the element",

    sin
    "Computes the sine of the element (in radians)",

    cos
    "Computes the cosine of the element (in radians)",

    tan
    "Computes the tangent of the element (in radians)",

    asin
    "Computes the arcsine of the element, NaN is outside [-1, 1]",

    acos
    "Computes the arccosine of the element, NaN is outside [-1, 1]",

    atan
    "Computes the arctangent of the element",

    sinh
    "Computes the hyperbolic sine of the element (in radians)",

    cosh
    "Computes the hyperbolic cosine of the element (in radians)",

    tanh
    "Computes the hyperbolic tangent of the element (in radians)",

    asinh
    "Computes the inverse hyperbolic sine of the element, NaN is outside [-1, 1]",

    acosh
    "Computes the inverse hyperbolic cosine of the element, NaN is outside [-1, 1]",

    atanh
    "Computes the inverse hyperbolic tangent of the element"
});

apply::zero!(FloatsVector {
    exp_m1 = exp_minus_1
    "Computes `e^x = 1`",

    ln_1p = ln_plus_1
    "Computes `ln(n + 1)`"
});

apply::one!(FloatsVector, f64 {
    div_euclid
    "Calculates the quotient of euclidean division on each element",

    rem_euclid
    "Calculates the remainder of euclideam division on each element",

    powf
    "Raises each element to an integer power",

    log
    "Computes the base `a` logarithm of the element",

    hypot
    "Calculate the hypotenuse of the right angled triangle with the element as one \
     side and `a` as the other",

    atan2
    "Computes the four quadrant arctangent of the element"
});

apply::one!(FloatsVector, i32 {
    powi
    "Raises each element to an integer"
});

apply::one!(FloatsVector, f64 {
    add = add_constant
    "Add an float to each element",

    sub = sub_constant
    "Subtract an float from each element",

    mul = mul_constant
    "Multiply an float to each element",

    div = div_constant
    "Divide each element by an float"
});

apply::two!(FloatsVector, f64, f64 {
    mul_add
    "Compute `x*a + b` for each element `x`"
});
