module.exports = function(Appointment) {

  var isStatic = true;  
//   Appointment.disableRemoteMethod('create', isStatic);
  Appointment.disableRemoteMethod('exists', isStatic);
  Appointment.disableRemoteMethod("upsert", isStatic);
  Appointment.disableRemoteMethod("updateAll", isStatic);
  Appointment.disableRemoteMethod("findById", isStatic);
  Appointment.disableRemoteMethod("findOne", isStatic);
  Appointment.disableRemoteMethod("findById", isStatic);
  Appointment.disableRemoteMethod("deleteById", isStatic);
  Appointment.disableRemoteMethod("prototype.updateAttributes", isStatic);
//   Appointment.disableRemoteMethod("count", isStatic);
  Appointment.disableRemoteMethod("createChangeStream", isStatic); 
  Appointment.disableRemoteMethod("replaceOrCreate", isStatic);
  Appointment.disableRemoteMethod("upsertWithWhere", isStatic); 
};
