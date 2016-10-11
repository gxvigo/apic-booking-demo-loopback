module.exports = function(Office) {

  var isStatic = true;  
//   Office.disableRemoteMethod('create', isStatic);
  Office.disableRemoteMethod('exists', isStatic);
  Office.disableRemoteMethod("upsert", isStatic);
  Office.disableRemoteMethod("updateAll", isStatic);
  Office.disableRemoteMethod("findById", isStatic);
  Office.disableRemoteMethod("findOne", isStatic);
  Office.disableRemoteMethod("findById", isStatic);
  Office.disableRemoteMethod("deleteById", isStatic);
  Office.disableRemoteMethod("prototype.updateAttributes", isStatic);
//   Office.disableRemoteMethod("count", isStatic);
  Office.disableRemoteMethod("createChangeStream", isStatic); 
  Office.disableRemoteMethod("replaceOrCreate", isStatic);
  Office.disableRemoteMethod("upsertWithWhere", isStatic); 

};
