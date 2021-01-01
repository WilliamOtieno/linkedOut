
// $(document).ready(function(){
//
//     load_json_data('data');
//
//     function load_json_data(id, parent_id)
//     {
//         var html_code = '';
//         $.getJSON('data.json5', function(data){
//
//             html_code += '<option value="">Select '+id+'</option>';
//             $.each(data, function(key, value){
//                 if(id == 'data')
//                 {
//                     if(value.parent_id == '0')
//                     {
//                         html_code += '<option value="'+value.id+'">'+value.name+'</option>';
//                     }
//                 }
//                 else
//                 {
//                     if(value.parent_id == parent_id)
//                     {
//                         html_code += '<option value="'+value.id+'">'+value.name+'</option>';
//                     }
//                 }
//             });
//             $('#'+id).html(html_code);
//         });
//
//     }
//
//     $(document).on('change', '#data', function(){
//         var data_id = $(this).val();
//         if(data_id != '')
//         {
//             load_json_data('state', data_id);
//         }
//         else
//         {
//             $('#state').html('<option value="">Select state</option>');
//             $('#city').html('<option value="">Select city</option>');
//         }
//     });
//     $(document).on('change', '#state', function(){
//         var state_id = $(this).val();
//         if(state_id != '')
//         {
//             load_json_data('city', state_id);
//         }
//         else
//         {
//             $('#city').html('<option value="">Select city</option>');
//         }
//     });
// });
