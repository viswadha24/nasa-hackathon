import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";

import Home from './Home';
import Schedule from './schedule';
import User from './user'
function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route  path="/" exact element={<Home />} />

      <Route path="/user"  exact element={<User />} />
      <Route path="/sched" exact element={<Schedule />} />


      </Routes>
    </BrowserRouter>
{/* <div className="navigation" >
	<button className="button" data-toggle="modal" data-target="#form" href="">
  ADD USER 
	</button>
</div>
		<div id="susbc-form" style={{margin:20}}>
			<div class="modal-dialog shadow-lg p-3 mb-5 bg-white rounded">
				<div class="modal-content sub-bg">
					<div class="modal-header subs-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12">
								<form id="subs-form">
									<div class="form-group row">
										<div class="col-md-12 col-xs-12">
											<label for="firstName" class="">First Name </label>
											<input type="text" class="form-control" id="firstName" placeholder="Please enter first name" required/>
										</div>
										<div class="col-md-12 col-xs-12" >
											<label for="firstName">Middle Name </label>
											<input type="text" class="form-control" id="firstName" placeholder="Please enter middle name" required/>
										</div>
										<div class="col-md-12 col-xs-12">
											<label for="firstName">Last Name </label>
											<input type="text" class="form-control" id="firstName" placeholder="Please enter last name" required/>
										</div>
									</div>
									<button type="submit" class="btn btn-primary text-center">Subscribe Now</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> */}


    </div>
  );


}

export default App;
