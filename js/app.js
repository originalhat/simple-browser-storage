if (typeof(Storage) != "undefined") {

    sessionStorage.setItem("item:1:1234", "bacon_wrap:onions:extra_bacon");
    sessionStorage.setItem("item:2:1234", "salad_wrap:lettuce:bacon");
    sessionStorage.setItem("item:3:1234", "{item: ham_wrap, modifiers:[{name: ham},{name: bacon}]}");

    sessionStorage.setItem("merchant_id", "1234");
    sessionStorage.setItem("item_id", "555293");
    sessionStorage.setItem("modifier_group_id", "92183181");

    sessionStorage.setItem("max_length?", "at least - 7k per value, probably much more");

    // sessionStorage.getItem("item_id");
    // sessionStorage.removeItem("item_id");
    // sessionStorage.clear();

    var order = {};
    order.merchant_id = 1234;
    order.items = [
      {
        name: "bacon wrap",
        modifiers: [
          {
            name: "bacon"
          }
        ]
      },
      {
        name: "lettuce wrap",
        modifiers: [
          {
            name: "lettuce",
            blended: true
          }
        ]
      }
    ];

    sessionStorage.setItem("order_" + (new Date).getTime(), JSON.stringify(order));

} else {
    alert("Sorry, your browser does not support Web Storage.");
}

