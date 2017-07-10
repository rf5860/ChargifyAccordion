const collapsibleElements = '.product_family_collection_heading, .product_family_heading'
$(collapsibleElements).click(function() {$(this).siblings().slideToggle(500)})
$('.product_family_heading').siblings().slideToggle(1)

