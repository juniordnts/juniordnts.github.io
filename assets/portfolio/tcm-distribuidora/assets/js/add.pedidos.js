var forms = 1;
$('#addPedido').click(function () {
  forms = forms + 1;
  $("#lentesPedido").append(`
			<div id='div${forms}' class='row px-3'>
				<div class='container'>
					<hr class="my-4">
				</div>

					<div class='col-md-4'>
						<span>Esférico</span>
						<select id='esf' name='esferico[]' placeholder='Esférico' required class='form-control'>
							<option disabled selected>Esférico</option>
							<option value='e200'>2.00</option>
							<option value='e175'>1.75</option>
							<option value='e150'>1.50</option>
							<option value='e125'>1.25</option>
							<option value='e100'>1.00</option>
							<option value='e075'>0.75</option>
							<option value='e050'>0.50</option>
							<option value='e025'>0.25</option>
							<option value='e000'>0.00</option>
							<option value='em025'>-0.25</option>
							<option value='em050'>-0.50</option>
							<option value='em175'>-0.75</option>
							<option value='em100'>-1.00</option>
							<option value='em125'>-1.25</option>
							<option value='em150'>-1.50</option>
							<option value='em175'>-1.75</option>
							<option value='em200'>-2.00</option>
						</select>
					</div>
					<div class='col-md-4'>
						<span>Cilíndrico</span>
						<select  id='cili' name='cilindro[]' placeholder='Cilindro' required class='form-control'>
							<option disabled selected>Cilíndrico</option>
							<option value='c000'> 0.00</option>
							<option value='c025'>-0.25</option>
							<option value='c050'>-0.50</option>
							<option value='c075'>-0.75</option>
							<option value='c100'>-1.00</option>
							<option value='c125'>-1.25</option>
							<option value='c150'>-1.50</option>
							<option value='c175'>-1.75</option>
							<option value='c200'>-2.00</option>
							<option value='c225'>-2.25</option>
							<option value='c250'>-2.50</option>
							<option value='c275'>-2.75</option>
							<option value='c300'>-3.00</option>
							<option value='c325'>-3.25</option>
							<option value='c350'>-3.50</option>
							<option value='c375'>-3.75</option>
							<option value='c400'>-4.00</option>
							<option value='c425'>-4.25</option>
							<option value='c450'>-4.50</option>
							<option value='c475'>-4.75</option>
							<option value='c500'>-5.00</option>
							<option value='c525'>-5.25</option>
							<option value='c550'>-5.50</option>
							<option value='c575'>-5.75</option>
							<option value='c600'>-6.00</option>
						</select>
					</div>
					<div class='col-md-4'>
						<span>Unidades</span>
						<input class='form-control' name='quantidade[]' placeholder='0' required='' type='number'>
					</div>
					<div class='col-md-12'>
						<button type='button' class='btn btn-danger col-md-12 mt-1' style='margin-top:24px' onclick='remove(${forms})'> X </button>
					</div>

			</div>
		`);
});
function remove(numero) { $("#div" + numero).remove(); };