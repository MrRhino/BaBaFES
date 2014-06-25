this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};

this["MyApp"]["Templates"]["customers"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr> \n            <th colspan=\"2\">"
    + escapeExpression((helper = helpers.fullName || (depth0 && depth0.fullName),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "fullName", (depth0 && depth0.name), options)))
    + "</th>\n        </tr>\n        <tr>\n            <td>e-mail</td> \n            <td><a href=\"mailto:";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td> \n        </tr> \n        <tr>\n            <td>Secondary Phone</td> \n            <td>";
  if (helper = helpers.secondaryPhoneNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secondaryPhoneNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td> \n        </tr> \n        <tr>\n            <td>CPR</td> \n            <td>";
  if (helper = helpers.cpr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cpr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td> \n        </tr> \n        <tr>\n            <td valign=top>Address</td> \n            <td>"
    + escapeExpression((helper = helpers.address || (depth0 && depth0.address),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.address), options) : helperMissing.call(depth0, "address", (depth0 && depth0.address), options)))
    + "</td> \n        </tr> \n        <tr>\n            <td>Balance</td> \n            <td>";
  if (helper = helpers.balance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.balance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td> \n        </tr> \n        <tr>\n            <td valign=top>Selective Services</td> \n            <td>"
    + escapeExpression((helper = helpers.selectiveServices || (depth0 && depth0.selectiveServices),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.selectiveServices), options) : helperMissing.call(depth0, "selectiveServices", (depth0 && depth0.selectiveServices), options)))
    + "</td> \n        </tr> \n        <tr>\n            <td valign=top>Receive Promomotions Permissions</td> \n            <td>"
    + escapeExpression((helper = helpers.receivePromomotionsPermissions || (depth0 && depth0.receivePromomotionsPermissions),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.receivePromomotionsPermissions), options) : helperMissing.call(depth0, "receivePromomotionsPermissions", (depth0 && depth0.receivePromomotionsPermissions), options)))
    + "</td> \n\n        </tr> \n        ";
  return buffer;
  }

  buffer += "<table class=\"customers\">\n    <tbody> \n        ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.customers) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.customers); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.customers) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n    </tbody> \n</table>\n";
  return buffer;
  });

this["MyApp"]["Templates"]["users"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " \n        <tr> \n            <td>"
    + escapeExpression((helper = helpers.fullName || (depth0 && depth0.fullName),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.person), options) : helperMissing.call(depth0, "fullName", (depth0 && depth0.person), options)))
    + "</td> \n            <td>";
  if (helper = helpers.jobTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.jobTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td> \n            <td><a href=\"https://twitter.com/";
  if (helper = helpers.twitter) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.twitter); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">@";
  if (helper = helpers.twitter) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.twitter); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td> \n        </tr> \n        ";
  return buffer;
  }

  buffer += "<table class=\"users\">\n    <thead> \n        <th>Name</th> \n        <th>Job Title</th> \n        <th>Twitter</th> \n    </thead> \n    <tbody> \n        ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.users) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.users); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.users) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n    </tbody> \n</table>";
  return buffer;
  });