/**

<div key={index}>
<Form.Control
  type="text"
  placeholder="Enter Website"
  // value={inputFields}
  // onChange={}
/>
<Button
  variant="danger"
  // onClick={}
>
  Remove
</Button>
</div>



{products.map((product, index) => (
<div key={product.id}>
  {product.id === currID &&
    product.websites.map((p, i) => (
      <tr>
        {console.log(
          "Inside Details: ",
          "website: ",
          p,
          "typeof: ",
          typeof p,
          "index: ",
          i,
          "value: ",
          p.value
        )}
        <td>{i}</td>
        <td>90</td>
      </tr>
    ))}
</div>
))}

 */
