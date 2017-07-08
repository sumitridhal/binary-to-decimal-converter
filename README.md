# binary-to-decimal-converter

## Binary to Decimal Conversion

In the binary numbering system, a binary number such as 101100101 is expressed with a string of “1’s” and “0’s” with each digit along the string from right to left having a value twice that of the previous digit. But as it is a binary digit it can only have a value of either “1” or “0” therefore, q is equal to “2” (0 or 1) with its position indicating its weight within the string.

As the decimal number is a weighted number, converting from decimal to binary (base 10 to base 2) will also produce a weighted binary number with the right-hand most bit being the Least Significant Bit or LSB, and the left-hand most bit being the Most Significant Bit or MSB, and we can represent this as:

Representation of a Binary Number

<table>
<thead><tr>
<td>MSB</td>
<td colspan="7">Binary Digit</td>
<td>LSB</td>
</tr>
</thead>
</tbody>
<tr>
<td style="width:50px;">2<sup>8</sup></td>
<td style="width:50px;">2<sup>7</sup></td>
<td style="width:50px;">2<sup>6</sup></td>
<td style="width:50px;">2<sup>5</sup></td>
<td style="width:50px;">2<sup>4</sup></td>
<td style="width:50px;">2<sup>3</sup></td>
<td style="width:50px;">2<sup>2</sup></td>
<td style="width:50px;">2<sup>1</sup></td>
<td style="width:50px;">2<sup>0</sup></td>
</tr>
<tr>
<td>256</td>
<td>128</td>
<td>64</td>
<td>32</td>
<td>16</td>
<td>8</td>
<td>4</td>
<td>2</td>
<td>1</td>
</tr>
</tbody></table>
