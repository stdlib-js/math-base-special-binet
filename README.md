<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Binet's Formula

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate [Binet's formula][fibonacci-number] extended to real numbers.

<section class="intro">

[Binet's formula][fibonacci-number] refers to the closed-form solution for computing the nth [Fibonacci number][fibonacci-number] and may be expressed

<!-- <equation class="equation" label="eq:binets_formula" align="center" raw="F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}}" alt="Binet's formula"> -->

```math
F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}}
```

<!-- <div class="equation" align="center" data-raw-text="F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}}" data-equation="eq:binets_formula">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binet/docs/img/equation_binets_formula.svg" alt="Binet's formula">
    <br>
</div> -->

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio] and `ψ` is `1 - φ`. To extend [Fibonacci numbers][fibonacci-number] to real numbers, we may express [Binet's formula][fibonacci-number] as

<!-- <equation class="equation" label="eq:binets_formula_real_numbers" align="center" raw="F_x = \frac{\varphi^x - \varphi^{-x} \cdot \cos(\pi x)}{\sqrt{5}}" alt="Binet's formula extended to real numbers."> -->

```math
F_x = \frac{\varphi^x - \varphi^{-x} \cdot \cos(\pi x)}{\sqrt{5}}
```

<!-- <div class="equation" align="center" data-raw-text="F_x = \frac{\varphi^x - \varphi^{-x} \cdot \cos(\pi x)}{\sqrt{5}}" data-equation="eq:binets_formula_real_numbers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binet/docs/img/equation_binets_formula_real_numbers.svg" alt="Binet's formula extended to real numbers.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-binet
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var binet = require( '@stdlib/math-base-special-binet' );
```

#### binet( x )

Evaluates [Binet's formula][fibonacci-number] extended to real numbers.

```javascript
var v = binet( 0.0 );
// returns 0.0

v = binet( 1.0 );
// returns 1.0

v = binet( 2.0 );
// returns 1.0

v = binet( 3.0 );
// returns 2.0

v = binet( -1.0 );
// returns 1.0

v = binet( 3.14 );
// returns ~2.12
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = binet( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns only **approximate** [Fibonacci numbers][fibonacci-number] for nonnegative integers.
-   The function does **not** return complex numbers, guaranteeing real-valued return values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var binet = require( '@stdlib/math-base-special-binet' );

var v;
var i;

for ( i = 0; i < 79; i++ ) {
    v = binet( i );
    console.log( v );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/binet.h"
```

#### stdlib_base_binet( x )

Evaluates [Binet's formula][fibonacci-number] extended to real numbers.

```c
double out = stdlib_base_binet( 0.0 );
// returns 0.0

out = stdlib_base_binet( 1.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_binet( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/binet.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 1.0, 2.0, 3.0, 4.0 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_binet( x[ i ] );
        printf( "binet(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/fibonacci`][@stdlib/math/base/special/fibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Fibonacci number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/negafibonacci`][@stdlib/math/base/special/negafibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth negaFibonacci number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-binet.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-binet

[test-image]: https://github.com/stdlib-js/math-base-special-binet/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-binet/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-binet/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-binet?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-binet.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-binet/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-binet/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-binet/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-binet/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-binet/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-binet/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-binet/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-binet/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-binet/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

<!-- <related-links> -->

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math-base-special-fibonacci

[@stdlib/math/base/special/negafibonacci]: https://github.com/stdlib-js/math-base-special-negafibonacci

<!-- </related-links> -->

</section>

<!-- /.links -->
