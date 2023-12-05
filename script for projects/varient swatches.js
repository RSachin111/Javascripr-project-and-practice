<script>
  $("document").ready(function() {
   $(".onload_button_0").trigger('click');
  });
  var product_data = {{ product.variants | json }};
  // console.log(product_data);
  function getDataVariant(option_v) {
    $('.option_main_1 .product-form__label').css("display", "none");
    $('.option_main_2 .product-form__label').css("display", "none");
    jQuery.each( product_data, function( i, val ) 
    {
      if(val.option1 == option_v)
      {
        var option_2 = val.option2;
        console.log(option_2);
        var result2 = option_2.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
        var result2_trim = $.trim(result2);
        console.log(result2_trim);
        
        $('.show_option_'+result2_trim).css("display", "inline-block");
        $('#show_option_second').val(result2_trim);
        $('#show_option_second_id').val(val.id);
        
        var option_3 = val.option3;
        console.log(option_3);
        var result3 = option_3.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '')
        var result3_trim = $.trim(result3);
        console.log(result3_trim);
        
        $('.show_option_'+result3_trim).css("display", "inline-block");
        $('#show_option_third').val(result3_trim);
        $('#show_option_third_id').val(val.id);
      }
    });
    var valchecksecond = $('#show_option_second').val();
    var valchecksecondid = $('#show_option_second_id').val();
    console.log(valchecksecond);
    console.log(valchecksecondid);
    // $('.show_option_text'+valchecksecond).css("background-color", "red");
    // $('.input_show_option_'+valchecksecond).attr("checked", "checked");
    
    var valcheckthird = $('#show_option_third').val();
    var valcheckthirdid = $('#show_option_second_id').val();
    console.log(valcheckthird);
    console.log(valcheckthirdid);
    // $('.show_option_text'+valcheckthird).css("background-color", "red");
    // $('.input_show_option_'+valcheckthird).attr("checked", "checked");
    
  }
</script>