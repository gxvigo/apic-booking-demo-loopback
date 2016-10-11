module.exports = function(Doctor) {

  var isStatic = true;  
//   Doctor.disableRemoteMethod('create', isStatic);
  Doctor.disableRemoteMethod('exists', isStatic);
  Doctor.disableRemoteMethod("upsert", isStatic);
  Doctor.disableRemoteMethod("updateAll", isStatic);
  Doctor.disableRemoteMethod("findById", isStatic);
  Doctor.disableRemoteMethod("findOne", isStatic);
  Doctor.disableRemoteMethod("findById", isStatic);
  Doctor.disableRemoteMethod("deleteById", isStatic);
  Doctor.disableRemoteMethod("prototype.updateAttributes", isStatic);
//   Doctor.disableRemoteMethod("count", isStatic);
  Doctor.disableRemoteMethod("createChangeStream", isStatic); 
  Doctor.disableRemoteMethod("replaceOrCreate", isStatic);
  Doctor.disableRemoteMethod("upsertWithWhere", isStatic); 

};
