//facet the taxonomy for every product search
request.addParam('facet','true');
request.addParam('facet.field','cpath');
request.addParam('facet.mincount',1);
request.addParam('facet.sort','count');
request.addParam('f.cpath.facet.sort','index');

//rules for Men/Blazers
if (request.getParam('fq').contains('{!term f=cpath}Men/Blazers')) {
	//facets for Blazers
	request.addParam('facet.field','apparel_type_ss');
	request.addParam('apparel_type_ss.label', "Apparel Type");
	request.addParam('facet.field','color_ss');
		request.addParam('color_ss.label', "Color");
	
	request.addParam('facet.field','fit_ss');
	request.addParam('fit_ss.label','Fit');
	//request.addParam('facet.field','gender_ss');
	request.addParam('facet.field','occasion_ss');
	request.addParam('facet.field','size_ss');
	request.addParam('facet.field','sleeve_length_ss');
}