;(function(Agent){

  // @private
  // Note: name is prefixed by "agent:" and can't contain spaces
  //       (because it's transformed in a Backbone event in the Panel)
  Agent.sendAppComponentReport = function(name, report, options) {
      report = report || {};
      options = options || {};

      // the timestamp is typically used by the panel to exclude old reports
      var timestamp = new Date().getTime();

      Agent.sendMessage({
          name: 'agent:' + name,
          data: report,
          timestamp: timestamp
      }, options);
  };

}(Agent));