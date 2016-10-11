module.exports = function(Patient) {

  var isStatic = true;  
//   Patient.disableRemoteMethod('create', isStatic);
  Patient.disableRemoteMethod('exists', isStatic);
  Patient.disableRemoteMethod("upsert", isStatic);
  Patient.disableRemoteMethod("updateAll", isStatic);
  Patient.disableRemoteMethod("findById", isStatic);
  Patient.disableRemoteMethod("findOne", isStatic);
  Patient.disableRemoteMethod("findById", isStatic);
  Patient.disableRemoteMethod("deleteById", isStatic);
  Patient.disableRemoteMethod("prototype.updateAttributes", isStatic);
//   Patient.disableRemoteMethod("count", isStatic);
  Patient.disableRemoteMethod("createChangeStream", isStatic); 
  Patient.disableRemoteMethod("replaceOrCreate", isStatic);
  Patient.disableRemoteMethod("upsertWithWhere", isStatic); 

};
