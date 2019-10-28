/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_loom_pb = require('../proto/loom_pb.js');
goog.exportSymbol('proto.BatchRequest', null, global);
goog.exportSymbol('proto.BatchRequestMeta', null, global);
goog.exportSymbol('proto.CandidateListV3', null, global);
goog.exportSymbol('proto.CandidateState', null, global);
goog.exportSymbol('proto.CandidateStatistic', null, global);
goog.exportSymbol('proto.CandidateV3', null, global);
goog.exportSymbol('proto.ChangeCandidateFeeRequestV3', null, global);
goog.exportSymbol('proto.ChangeWhitelistInfoRequest', null, global);
goog.exportSymbol('proto.CheckAllDelegationsRequestV3', null, global);
goog.exportSymbol('proto.CheckAllDelegationsResponseV3', null, global);
goog.exportSymbol('proto.CheckDelegationRequest', null, global);
goog.exportSymbol('proto.CheckDelegationResponse', null, global);
goog.exportSymbol('proto.CheckDelegatorRewardsRequest', null, global);
goog.exportSymbol('proto.CheckDelegatorRewardsResponse', null, global);
goog.exportSymbol('proto.CheckRewardDelegationRequest', null, global);
goog.exportSymbol('proto.CheckRewardDelegationResponse', null, global);
goog.exportSymbol('proto.CheckRewardsRequest', null, global);
goog.exportSymbol('proto.CheckRewardsResponse', null, global);
goog.exportSymbol('proto.ClaimDelegatorRewardsRequest', null, global);
goog.exportSymbol('proto.ClaimDelegatorRewardsResponse', null, global);
goog.exportSymbol('proto.ConsolidateDelegationsRequest', null, global);
goog.exportSymbol('proto.DPOSInitRequest', null, global);
goog.exportSymbol('proto.DelegateRequest', null, global);
goog.exportSymbol('proto.Delegation', null, global);
goog.exportSymbol('proto.DelegationIndex', null, global);
goog.exportSymbol('proto.DelegationList', null, global);
goog.exportSymbol('proto.DelegationState', null, global);
goog.exportSymbol('proto.DowntimeRecord', null, global);
goog.exportSymbol('proto.DowntimeRecordRequest', null, global);
goog.exportSymbol('proto.DowntimeRecordResponse', null, global);
goog.exportSymbol('proto.DposCandidateFeeChangeEvent', null, global);
goog.exportSymbol('proto.DposCandidateRegistersEvent', null, global);
goog.exportSymbol('proto.DposCandidateUnregistersEvent', null, global);
goog.exportSymbol('proto.DposDelegatorClaimsRewardsEvent', null, global);
goog.exportSymbol('proto.DposDelegatorConsolidatesEvent', null, global);
goog.exportSymbol('proto.DposDelegatorDelegatesEvent', null, global);
goog.exportSymbol('proto.DposDelegatorRedelegatesEvent', null, global);
goog.exportSymbol('proto.DposDelegatorUnbondsEvent', null, global);
goog.exportSymbol('proto.DposElectionEvent', null, global);
goog.exportSymbol('proto.DposReferrerRegistersEvent', null, global);
goog.exportSymbol('proto.DposSlashEvent', null, global);
goog.exportSymbol('proto.DposUpdateCandidateInfoEvent', null, global);
goog.exportSymbol('proto.GetRequestBatchTallyRequest', null, global);
goog.exportSymbol('proto.GetStateRequest', null, global);
goog.exportSymbol('proto.GetStateResponse', null, global);
goog.exportSymbol('proto.InitializationState', null, global);
goog.exportSymbol('proto.ListAllDelegationsRequestV3', null, global);
goog.exportSymbol('proto.ListAllDelegationsResponseV3', null, global);
goog.exportSymbol('proto.ListCandidatesRequest', null, global);
goog.exportSymbol('proto.ListCandidatesResponse', null, global);
goog.exportSymbol('proto.ListDelegationsRequestV3', null, global);
goog.exportSymbol('proto.ListDelegationsResponseV3', null, global);
goog.exportSymbol('proto.ListValidatorsRequest', null, global);
goog.exportSymbol('proto.ListValidatorsResponse', null, global);
goog.exportSymbol('proto.LocktimeTier', null, global);
goog.exportSymbol('proto.Params', null, global);
goog.exportSymbol('proto.RedelegateRequest', null, global);
goog.exportSymbol('proto.RegisterCandidateRequestV3', null, global);
goog.exportSymbol('proto.RegisterReferrerRequest', null, global);
goog.exportSymbol('proto.RemoveWhitelistedCandidateRequest', null, global);
goog.exportSymbol('proto.RequestBatch', null, global);
goog.exportSymbol('proto.RequestBatchTally', null, global);
goog.exportSymbol('proto.SetDowntimePeriodRequest', null, global);
goog.exportSymbol('proto.SetElectionCycleRequest', null, global);
goog.exportSymbol('proto.SetMaxYearlyRewardRequest', null, global);
goog.exportSymbol('proto.SetMinCandidateFeeRequest', null, global);
goog.exportSymbol('proto.SetOracleAddressRequest', null, global);
goog.exportSymbol('proto.SetRegistrationRequirementRequest', null, global);
goog.exportSymbol('proto.SetSlashingPercentagesRequest', null, global);
goog.exportSymbol('proto.SetValidatorCountRequest', null, global);
goog.exportSymbol('proto.State', null, global);
goog.exportSymbol('proto.TimeUntilElectionRequestV3', null, global);
goog.exportSymbol('proto.TimeUntilElectionResponseV3', null, global);
goog.exportSymbol('proto.TotalDelegationRequestV3', null, global);
goog.exportSymbol('proto.TotalDelegationResponseV3', null, global);
goog.exportSymbol('proto.UnbondRequest', null, global);
goog.exportSymbol('proto.UnregisterCandidateRequestV3', null, global);
goog.exportSymbol('proto.UpdateCandidateInfoRequest', null, global);
goog.exportSymbol('proto.ValidatorStatistic', null, global);
goog.exportSymbol('proto.ValidatorV3', null, global);
goog.exportSymbol('proto.WhitelistCandidateRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ValidatorV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ValidatorV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ValidatorV3.displayName = 'proto.ValidatorV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ValidatorV3.prototype.toObject = function(opt_includeInstance) {
  return proto.ValidatorV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ValidatorV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ValidatorV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: msg.getPubKey_asB64(),
    power: msg.getPower()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ValidatorV3}
 */
proto.ValidatorV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ValidatorV3;
  return proto.ValidatorV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ValidatorV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ValidatorV3}
 */
proto.ValidatorV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ValidatorV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ValidatorV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ValidatorV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ValidatorV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPubKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getPower();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ValidatorV3} The clone.
 */
proto.ValidatorV3.prototype.cloneMessage = function() {
  return /** @type {!proto.ValidatorV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes pub_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ValidatorV3.prototype.getPubKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes pub_key = 1;
 * This is a type-conversion wrapper around `getPubKey()`
 * @return {string}
 */
proto.ValidatorV3.prototype.getPubKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubKey()));
};


/**
 * optional bytes pub_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubKey()`
 * @return {!Uint8Array}
 */
proto.ValidatorV3.prototype.getPubKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ValidatorV3.prototype.setPubKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 power = 2;
 * @return {number}
 */
proto.ValidatorV3.prototype.getPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.ValidatorV3.prototype.setPower = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Params.displayName = 'proto.Params';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Params} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorCount: msg.getValidatorCount(),
    electionCycleLength: msg.getElectionCycleLength(),
    coinContractAddress: (f = msg.getCoinContractAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    oracleAddress: (f = msg.getOracleAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    maxYearlyReward: (f = msg.getMaxYearlyReward()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    registrationRequirement: (f = msg.getRegistrationRequirement()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    crashSlashingPercentage: (f = msg.getCrashSlashingPercentage()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    byzantineSlashingPercentage: (f = msg.getByzantineSlashingPercentage()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    minCandidateFee: msg.getMinCandidateFee(),
    downtimePeriod: msg.getDowntimePeriod()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Params}
 */
proto.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Params;
  return proto.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Params}
 */
proto.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValidatorCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setElectionCycleLength(value);
      break;
    case 3:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setCoinContractAddress(value);
      break;
    case 4:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setOracleAddress(value);
      break;
    case 5:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setMaxYearlyReward(value);
      break;
    case 6:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setRegistrationRequirement(value);
      break;
    case 7:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setCrashSlashingPercentage(value);
      break;
    case 8:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setByzantineSlashingPercentage(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinCandidateFee(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDowntimePeriod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Params} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Params.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Params.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidatorCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getElectionCycleLength();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getCoinContractAddress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getOracleAddress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getMaxYearlyReward();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getRegistrationRequirement();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getCrashSlashingPercentage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getByzantineSlashingPercentage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getMinCandidateFee();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = this.getDowntimePeriod();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Params} The clone.
 */
proto.Params.prototype.cloneMessage = function() {
  return /** @type {!proto.Params} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 validator_count = 1;
 * @return {number}
 */
proto.Params.prototype.getValidatorCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.Params.prototype.setValidatorCount = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 election_cycle_length = 2;
 * @return {number}
 */
proto.Params.prototype.getElectionCycleLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.Params.prototype.setElectionCycleLength = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Address coin_contract_address = 3;
 * @return {proto.Address}
 */
proto.Params.prototype.getCoinContractAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 3));
};


/** @param {proto.Address|undefined} value  */
proto.Params.prototype.setCoinContractAddress = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.Params.prototype.clearCoinContractAddress = function() {
  this.setCoinContractAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Params.prototype.hasCoinContractAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Address oracle_address = 4;
 * @return {proto.Address}
 */
proto.Params.prototype.getOracleAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 4));
};


/** @param {proto.Address|undefined} value  */
proto.Params.prototype.setOracleAddress = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.Params.prototype.clearOracleAddress = function() {
  this.setOracleAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Params.prototype.hasOracleAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BigUInt max_yearly_reward = 5;
 * @return {proto.BigUInt}
 */
proto.Params.prototype.getMaxYearlyReward = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 5));
};


/** @param {proto.BigUInt|undefined} value  */
proto.Params.prototype.setMaxYearlyReward = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.Params.prototype.clearMaxYearlyReward = function() {
  this.setMaxYearlyReward(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Params.prototype.hasMaxYearlyReward = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BigUInt registration_requirement = 6;
 * @return {proto.BigUInt}
 */
proto.Params.prototype.getRegistrationRequirement = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 6));
};


/** @param {proto.BigUInt|undefined} value  */
proto.Params.prototype.setRegistrationRequirement = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.Params.prototype.clearRegistrationRequirement = function() {
  this.setRegistrationRequirement(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Params.prototype.hasRegistrationRequirement = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BigUInt crash_slashing_percentage = 7;
 * @return {proto.BigUInt}
 */
proto.Params.prototype.getCrashSlashingPercentage = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 7));
};


/** @param {proto.BigUInt|undefined} value  */
proto.Params.prototype.setCrashSlashingPercentage = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.Params.prototype.clearCrashSlashingPercentage = function() {
  this.setCrashSlashingPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Params.prototype.hasCrashSlashingPercentage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BigUInt byzantine_slashing_percentage = 8;
 * @return {proto.BigUInt}
 */
proto.Params.prototype.getByzantineSlashingPercentage = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 8));
};


/** @param {proto.BigUInt|undefined} value  */
proto.Params.prototype.setByzantineSlashingPercentage = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.Params.prototype.clearByzantineSlashingPercentage = function() {
  this.setByzantineSlashingPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Params.prototype.hasByzantineSlashingPercentage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 min_candidate_fee = 9;
 * @return {number}
 */
proto.Params.prototype.getMinCandidateFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 9, 0));
};


/** @param {number} value  */
proto.Params.prototype.setMinCandidateFee = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional uint64 downtime_period = 10;
 * @return {number}
 */
proto.Params.prototype.getDowntimePeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10, 0));
};


/** @param {number} value  */
proto.Params.prototype.setDowntimePeriod = function(value) {
  jspb.Message.setField(this, 10, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.State.repeatedFields_, null);
};
goog.inherits(proto.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.State.displayName = 'proto.State';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.State.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.State.prototype.toObject = function(opt_includeInstance) {
  return proto.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.State} msg The msg instance to transform.
 * @return {!Object}
 */
proto.State.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && proto.Params.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.ValidatorV3.toObject, includeInstance),
    lastElectionTime: msg.getLastElectionTime(),
    totalValidatorDelegations: (f = msg.getTotalValidatorDelegations()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    totalRewardDistribution: (f = msg.getTotalRewardDistribution()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.State}
 */
proto.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.State;
  return proto.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.State}
 */
proto.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Params;
      reader.readMessage(value,proto.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new proto.ValidatorV3;
      reader.readMessage(value,proto.ValidatorV3.deserializeBinaryFromReader);
      msg.getValidatorsList().push(value);
      msg.setValidatorsList(msg.getValidatorsList());
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastElectionTime(value);
      break;
    case 4:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setTotalValidatorDelegations(value);
      break;
    case 5:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setTotalRewardDistribution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.State} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.State.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.State.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Params.serializeBinaryToWriter
    );
  }
  f = this.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ValidatorV3.serializeBinaryToWriter
    );
  }
  f = this.getLastElectionTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getTotalValidatorDelegations();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getTotalRewardDistribution();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.State} The clone.
 */
proto.State.prototype.cloneMessage = function() {
  return /** @type {!proto.State} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Params params = 1;
 * @return {proto.Params}
 */
proto.State.prototype.getParams = function() {
  return /** @type{proto.Params} */ (
    jspb.Message.getWrapperField(this, proto.Params, 1));
};


/** @param {proto.Params|undefined} value  */
proto.State.prototype.setParams = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.State.prototype.clearParams = function() {
  this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.State.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ValidatorV3 validators = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ValidatorV3>}
 */
proto.State.prototype.getValidatorsList = function() {
  return /** @type{!Array.<!proto.ValidatorV3>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ValidatorV3, 2));
};


/** @param {Array.<!proto.ValidatorV3>} value  */
proto.State.prototype.setValidatorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.State.prototype.clearValidatorsList = function() {
  this.setValidatorsList([]);
};


/**
 * optional int64 last_election_time = 3;
 * @return {number}
 */
proto.State.prototype.getLastElectionTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.State.prototype.setLastElectionTime = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional BigUInt total_validator_delegations = 4;
 * @return {proto.BigUInt}
 */
proto.State.prototype.getTotalValidatorDelegations = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 4));
};


/** @param {proto.BigUInt|undefined} value  */
proto.State.prototype.setTotalValidatorDelegations = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.State.prototype.clearTotalValidatorDelegations = function() {
  this.setTotalValidatorDelegations(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.State.prototype.hasTotalValidatorDelegations = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BigUInt total_reward_distribution = 5;
 * @return {proto.BigUInt}
 */
proto.State.prototype.getTotalRewardDistribution = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 5));
};


/** @param {proto.BigUInt|undefined} value  */
proto.State.prototype.setTotalRewardDistribution = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.State.prototype.clearTotalRewardDistribution = function() {
  this.setTotalRewardDistribution(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.State.prototype.hasTotalRewardDistribution = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InitializationState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.InitializationState.repeatedFields_, null);
};
goog.inherits(proto.InitializationState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.InitializationState.displayName = 'proto.InitializationState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.InitializationState.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InitializationState.prototype.toObject = function(opt_includeInstance) {
  return proto.InitializationState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InitializationState} msg The msg instance to transform.
 * @return {!Object}
 */
proto.InitializationState.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.State.toObject(includeInstance, f),
    candidatesList: jspb.Message.toObjectList(msg.getCandidatesList(),
    proto.CandidateV3.toObject, includeInstance),
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.Delegation.toObject, includeInstance),
    statisticsList: jspb.Message.toObjectList(msg.getStatisticsList(),
    proto.ValidatorStatistic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InitializationState}
 */
proto.InitializationState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InitializationState;
  return proto.InitializationState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InitializationState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InitializationState}
 */
proto.InitializationState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.State;
      reader.readMessage(value,proto.State.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 2:
      var value = new proto.CandidateV3;
      reader.readMessage(value,proto.CandidateV3.deserializeBinaryFromReader);
      msg.getCandidatesList().push(value);
      msg.setCandidatesList(msg.getCandidatesList());
      break;
    case 3:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.getDelegationsList().push(value);
      msg.setDelegationsList(msg.getDelegationsList());
      break;
    case 4:
      var value = new proto.ValidatorStatistic;
      reader.readMessage(value,proto.ValidatorStatistic.deserializeBinaryFromReader);
      msg.getStatisticsList().push(value);
      msg.setStatisticsList(msg.getStatisticsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.InitializationState} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.InitializationState.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InitializationState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.InitializationState.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.State.serializeBinaryToWriter
    );
  }
  f = this.getCandidatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.CandidateV3.serializeBinaryToWriter
    );
  }
  f = this.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
  f = this.getStatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ValidatorStatistic.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.InitializationState} The clone.
 */
proto.InitializationState.prototype.cloneMessage = function() {
  return /** @type {!proto.InitializationState} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional State state = 1;
 * @return {proto.State}
 */
proto.InitializationState.prototype.getState = function() {
  return /** @type{proto.State} */ (
    jspb.Message.getWrapperField(this, proto.State, 1));
};


/** @param {proto.State|undefined} value  */
proto.InitializationState.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.InitializationState.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.InitializationState.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CandidateV3 candidates = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.CandidateV3>}
 */
proto.InitializationState.prototype.getCandidatesList = function() {
  return /** @type{!Array.<!proto.CandidateV3>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CandidateV3, 2));
};


/** @param {Array.<!proto.CandidateV3>} value  */
proto.InitializationState.prototype.setCandidatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.InitializationState.prototype.clearCandidatesList = function() {
  this.setCandidatesList([]);
};


/**
 * repeated Delegation delegations = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Delegation>}
 */
proto.InitializationState.prototype.getDelegationsList = function() {
  return /** @type{!Array.<!proto.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Delegation, 3));
};


/** @param {Array.<!proto.Delegation>} value  */
proto.InitializationState.prototype.setDelegationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.InitializationState.prototype.clearDelegationsList = function() {
  this.setDelegationsList([]);
};


/**
 * repeated ValidatorStatistic statistics = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ValidatorStatistic>}
 */
proto.InitializationState.prototype.getStatisticsList = function() {
  return /** @type{!Array.<!proto.ValidatorStatistic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ValidatorStatistic, 4));
};


/** @param {Array.<!proto.ValidatorStatistic>} value  */
proto.InitializationState.prototype.setStatisticsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.InitializationState.prototype.clearStatisticsList = function() {
  this.setStatisticsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ValidatorStatistic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ValidatorStatistic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ValidatorStatistic.displayName = 'proto.ValidatorStatistic';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ValidatorStatistic.prototype.toObject = function(opt_includeInstance) {
  return proto.ValidatorStatistic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ValidatorStatistic} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ValidatorStatistic.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    whitelistAmount: (f = msg.getWhitelistAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    locktimeTier: msg.getLocktimeTier(),
    delegationTotal: (f = msg.getDelegationTotal()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    slashPercentage: (f = msg.getSlashPercentage()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    recentlyMissedBlocks: msg.getRecentlyMissedBlocks(),
    updateWhitelistAmount: (f = msg.getUpdateWhitelistAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    updateLocktimeTier: msg.getUpdateLocktimeTier()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ValidatorStatistic}
 */
proto.ValidatorStatistic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ValidatorStatistic;
  return proto.ValidatorStatistic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ValidatorStatistic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ValidatorStatistic}
 */
proto.ValidatorStatistic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setWhitelistAmount(value);
      break;
    case 3:
      var value = /** @type {!proto.LocktimeTier} */ (reader.readEnum());
      msg.setLocktimeTier(value);
      break;
    case 4:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setDelegationTotal(value);
      break;
    case 5:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setSlashPercentage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecentlyMissedBlocks(value);
      break;
    case 7:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setUpdateWhitelistAmount(value);
      break;
    case 8:
      var value = /** @type {!proto.LocktimeTier} */ (reader.readEnum());
      msg.setUpdateLocktimeTier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ValidatorStatistic} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ValidatorStatistic.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ValidatorStatistic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ValidatorStatistic.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getWhitelistAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getLocktimeTier();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = this.getDelegationTotal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getSlashPercentage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getRecentlyMissedBlocks();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = this.getUpdateWhitelistAmount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getUpdateLocktimeTier();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ValidatorStatistic} The clone.
 */
proto.ValidatorStatistic.prototype.cloneMessage = function() {
  return /** @type {!proto.ValidatorStatistic} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address address = 1;
 * @return {proto.Address}
 */
proto.ValidatorStatistic.prototype.getAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.ValidatorStatistic.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ValidatorStatistic.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ValidatorStatistic.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt whitelist_amount = 2;
 * @return {proto.BigUInt}
 */
proto.ValidatorStatistic.prototype.getWhitelistAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.ValidatorStatistic.prototype.setWhitelistAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ValidatorStatistic.prototype.clearWhitelistAmount = function() {
  this.setWhitelistAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ValidatorStatistic.prototype.hasWhitelistAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocktimeTier locktime_tier = 3;
 * @return {!proto.LocktimeTier}
 */
proto.ValidatorStatistic.prototype.getLocktimeTier = function() {
  return /** @type {!proto.LocktimeTier} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {!proto.LocktimeTier} value  */
proto.ValidatorStatistic.prototype.setLocktimeTier = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional BigUInt delegation_total = 4;
 * @return {proto.BigUInt}
 */
proto.ValidatorStatistic.prototype.getDelegationTotal = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 4));
};


/** @param {proto.BigUInt|undefined} value  */
proto.ValidatorStatistic.prototype.setDelegationTotal = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.ValidatorStatistic.prototype.clearDelegationTotal = function() {
  this.setDelegationTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ValidatorStatistic.prototype.hasDelegationTotal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BigUInt slash_percentage = 5;
 * @return {proto.BigUInt}
 */
proto.ValidatorStatistic.prototype.getSlashPercentage = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 5));
};


/** @param {proto.BigUInt|undefined} value  */
proto.ValidatorStatistic.prototype.setSlashPercentage = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.ValidatorStatistic.prototype.clearSlashPercentage = function() {
  this.setSlashPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ValidatorStatistic.prototype.hasSlashPercentage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 recently_missed_blocks = 6;
 * @return {number}
 */
proto.ValidatorStatistic.prototype.getRecentlyMissedBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.ValidatorStatistic.prototype.setRecentlyMissedBlocks = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional BigUInt update_whitelist_amount = 7;
 * @return {proto.BigUInt}
 */
proto.ValidatorStatistic.prototype.getUpdateWhitelistAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 7));
};


/** @param {proto.BigUInt|undefined} value  */
proto.ValidatorStatistic.prototype.setUpdateWhitelistAmount = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.ValidatorStatistic.prototype.clearUpdateWhitelistAmount = function() {
  this.setUpdateWhitelistAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ValidatorStatistic.prototype.hasUpdateWhitelistAmount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LocktimeTier update_locktime_tier = 8;
 * @return {!proto.LocktimeTier}
 */
proto.ValidatorStatistic.prototype.getUpdateLocktimeTier = function() {
  return /** @type {!proto.LocktimeTier} */ (jspb.Message.getFieldProto3(this, 8, 0));
};


/** @param {!proto.LocktimeTier} value  */
proto.ValidatorStatistic.prototype.setUpdateLocktimeTier = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CandidateV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CandidateV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CandidateV3.displayName = 'proto.CandidateV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CandidateV3.prototype.toObject = function(opt_includeInstance) {
  return proto.CandidateV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CandidateV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CandidateV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    pubKey: msg.getPubKey_asB64(),
    fee: msg.getFee(),
    newFee: msg.getNewFee(),
    state: msg.getState(),
    name: msg.getName(),
    description: msg.getDescription(),
    website: msg.getWebsite(),
    maxReferralPercentage: msg.getMaxReferralPercentage()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CandidateV3}
 */
proto.CandidateV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CandidateV3;
  return proto.CandidateV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CandidateV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CandidateV3}
 */
proto.CandidateV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNewFee(value);
      break;
    case 5:
      var value = /** @type {!proto.CandidateState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxReferralPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CandidateV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CandidateV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CandidateV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CandidateV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getPubKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getFee();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = this.getNewFee();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = this.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getWebsite();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getMaxReferralPercentage();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CandidateV3} The clone.
 */
proto.CandidateV3.prototype.cloneMessage = function() {
  return /** @type {!proto.CandidateV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address address = 1;
 * @return {proto.Address}
 */
proto.CandidateV3.prototype.getAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.CandidateV3.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CandidateV3.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CandidateV3.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes pub_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.CandidateV3.prototype.getPubKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes pub_key = 2;
 * This is a type-conversion wrapper around `getPubKey()`
 * @return {string}
 */
proto.CandidateV3.prototype.getPubKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubKey()));
};


/**
 * optional bytes pub_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubKey()`
 * @return {!Uint8Array}
 */
proto.CandidateV3.prototype.getPubKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.CandidateV3.prototype.setPubKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 fee = 3;
 * @return {number}
 */
proto.CandidateV3.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.CandidateV3.prototype.setFee = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 new_fee = 4;
 * @return {number}
 */
proto.CandidateV3.prototype.getNewFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.CandidateV3.prototype.setNewFee = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional CandidateState state = 5;
 * @return {!proto.CandidateState}
 */
proto.CandidateV3.prototype.getState = function() {
  return /** @type {!proto.CandidateState} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {!proto.CandidateState} value  */
proto.CandidateV3.prototype.setState = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.CandidateV3.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.CandidateV3.prototype.setName = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.CandidateV3.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 7, ""));
};


/** @param {string} value  */
proto.CandidateV3.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string website = 8;
 * @return {string}
 */
proto.CandidateV3.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 8, ""));
};


/** @param {string} value  */
proto.CandidateV3.prototype.setWebsite = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint64 max_referral_percentage = 9;
 * @return {number}
 */
proto.CandidateV3.prototype.getMaxReferralPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 9, 0));
};


/** @param {number} value  */
proto.CandidateV3.prototype.setMaxReferralPercentage = function(value) {
  jspb.Message.setField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CandidateStatistic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CandidateStatistic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CandidateStatistic.displayName = 'proto.CandidateStatistic';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CandidateStatistic.prototype.toObject = function(opt_includeInstance) {
  return proto.CandidateStatistic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CandidateStatistic} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CandidateStatistic.toObject = function(includeInstance, msg) {
  var f, obj = {
    statistic: (f = msg.getStatistic()) && proto.ValidatorStatistic.toObject(includeInstance, f),
    candidate: (f = msg.getCandidate()) && proto.CandidateV3.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CandidateStatistic}
 */
proto.CandidateStatistic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CandidateStatistic;
  return proto.CandidateStatistic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CandidateStatistic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CandidateStatistic}
 */
proto.CandidateStatistic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ValidatorStatistic;
      reader.readMessage(value,proto.ValidatorStatistic.deserializeBinaryFromReader);
      msg.setStatistic(value);
      break;
    case 2:
      var value = new proto.CandidateV3;
      reader.readMessage(value,proto.CandidateV3.deserializeBinaryFromReader);
      msg.setCandidate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CandidateStatistic} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CandidateStatistic.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CandidateStatistic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CandidateStatistic.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStatistic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ValidatorStatistic.serializeBinaryToWriter
    );
  }
  f = this.getCandidate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.CandidateV3.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CandidateStatistic} The clone.
 */
proto.CandidateStatistic.prototype.cloneMessage = function() {
  return /** @type {!proto.CandidateStatistic} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ValidatorStatistic statistic = 1;
 * @return {proto.ValidatorStatistic}
 */
proto.CandidateStatistic.prototype.getStatistic = function() {
  return /** @type{proto.ValidatorStatistic} */ (
    jspb.Message.getWrapperField(this, proto.ValidatorStatistic, 1));
};


/** @param {proto.ValidatorStatistic|undefined} value  */
proto.CandidateStatistic.prototype.setStatistic = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CandidateStatistic.prototype.clearStatistic = function() {
  this.setStatistic(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CandidateStatistic.prototype.hasStatistic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CandidateV3 candidate = 2;
 * @return {proto.CandidateV3}
 */
proto.CandidateStatistic.prototype.getCandidate = function() {
  return /** @type{proto.CandidateV3} */ (
    jspb.Message.getWrapperField(this, proto.CandidateV3, 2));
};


/** @param {proto.CandidateV3|undefined} value  */
proto.CandidateStatistic.prototype.setCandidate = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.CandidateStatistic.prototype.clearCandidate = function() {
  this.setCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CandidateStatistic.prototype.hasCandidate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CandidateListV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CandidateListV3.repeatedFields_, null);
};
goog.inherits(proto.CandidateListV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CandidateListV3.displayName = 'proto.CandidateListV3';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CandidateListV3.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CandidateListV3.prototype.toObject = function(opt_includeInstance) {
  return proto.CandidateListV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CandidateListV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CandidateListV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidatesList: jspb.Message.toObjectList(msg.getCandidatesList(),
    proto.CandidateV3.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CandidateListV3}
 */
proto.CandidateListV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CandidateListV3;
  return proto.CandidateListV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CandidateListV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CandidateListV3}
 */
proto.CandidateListV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.CandidateV3;
      reader.readMessage(value,proto.CandidateV3.deserializeBinaryFromReader);
      msg.getCandidatesList().push(value);
      msg.setCandidatesList(msg.getCandidatesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CandidateListV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CandidateListV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CandidateListV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CandidateListV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCandidatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.CandidateV3.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CandidateListV3} The clone.
 */
proto.CandidateListV3.prototype.cloneMessage = function() {
  return /** @type {!proto.CandidateListV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated CandidateV3 candidates = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.CandidateV3>}
 */
proto.CandidateListV3.prototype.getCandidatesList = function() {
  return /** @type{!Array.<!proto.CandidateV3>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CandidateV3, 1));
};


/** @param {Array.<!proto.CandidateV3>} value  */
proto.CandidateListV3.prototype.setCandidatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.CandidateListV3.prototype.clearCandidatesList = function() {
  this.setCandidatesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Delegation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Delegation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Delegation.displayName = 'proto.Delegation';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Delegation.prototype.toObject = function(opt_includeInstance) {
  return proto.Delegation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Delegation} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Delegation.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegator: (f = msg.getDelegator()) && proto_loom_pb.Address.toObject(includeInstance, f),
    validator: (f = msg.getValidator()) && proto_loom_pb.Address.toObject(includeInstance, f),
    updateValidator: (f = msg.getUpdateValidator()) && proto_loom_pb.Address.toObject(includeInstance, f),
    index: msg.getIndex(),
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    updateAmount: (f = msg.getUpdateAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    locktimeTier: msg.getLocktimeTier(),
    updateLocktimeTier: msg.getUpdateLocktimeTier(),
    lockTime: msg.getLockTime(),
    state: msg.getState(),
    referrer: msg.getReferrer()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Delegation}
 */
proto.Delegation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Delegation;
  return proto.Delegation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Delegation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Delegation}
 */
proto.Delegation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setDelegator(value);
      break;
    case 2:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 3:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setUpdateValidator(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndex(value);
      break;
    case 6:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 7:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setUpdateAmount(value);
      break;
    case 8:
      var value = /** @type {!proto.LocktimeTier} */ (reader.readEnum());
      msg.setLocktimeTier(value);
      break;
    case 9:
      var value = /** @type {!proto.LocktimeTier} */ (reader.readEnum());
      msg.setUpdateLocktimeTier(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockTime(value);
      break;
    case 11:
      var value = /** @type {!proto.DelegationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferrer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Delegation} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Delegation.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Delegation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Delegation.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getValidator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getUpdateValidator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getIndex();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getUpdateAmount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getLocktimeTier();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = this.getUpdateLocktimeTier();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = this.getLockTime();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = this.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = this.getReferrer();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Delegation} The clone.
 */
proto.Delegation.prototype.cloneMessage = function() {
  return /** @type {!proto.Delegation} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address delegator = 1;
 * @return {proto.Address}
 */
proto.Delegation.prototype.getDelegator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.Delegation.prototype.setDelegator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.Delegation.prototype.clearDelegator = function() {
  this.setDelegator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Delegation.prototype.hasDelegator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Address validator = 2;
 * @return {proto.Address}
 */
proto.Delegation.prototype.getValidator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 2));
};


/** @param {proto.Address|undefined} value  */
proto.Delegation.prototype.setValidator = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.Delegation.prototype.clearValidator = function() {
  this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Delegation.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Address update_validator = 3;
 * @return {proto.Address}
 */
proto.Delegation.prototype.getUpdateValidator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 3));
};


/** @param {proto.Address|undefined} value  */
proto.Delegation.prototype.setUpdateValidator = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.Delegation.prototype.clearUpdateValidator = function() {
  this.setUpdateValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Delegation.prototype.hasUpdateValidator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 index = 4;
 * @return {number}
 */
proto.Delegation.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.Delegation.prototype.setIndex = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional BigUInt amount = 6;
 * @return {proto.BigUInt}
 */
proto.Delegation.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 6));
};


/** @param {proto.BigUInt|undefined} value  */
proto.Delegation.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.Delegation.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Delegation.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BigUInt update_amount = 7;
 * @return {proto.BigUInt}
 */
proto.Delegation.prototype.getUpdateAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 7));
};


/** @param {proto.BigUInt|undefined} value  */
proto.Delegation.prototype.setUpdateAmount = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.Delegation.prototype.clearUpdateAmount = function() {
  this.setUpdateAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Delegation.prototype.hasUpdateAmount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LocktimeTier locktime_tier = 8;
 * @return {!proto.LocktimeTier}
 */
proto.Delegation.prototype.getLocktimeTier = function() {
  return /** @type {!proto.LocktimeTier} */ (jspb.Message.getFieldProto3(this, 8, 0));
};


/** @param {!proto.LocktimeTier} value  */
proto.Delegation.prototype.setLocktimeTier = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional LocktimeTier update_locktime_tier = 9;
 * @return {!proto.LocktimeTier}
 */
proto.Delegation.prototype.getUpdateLocktimeTier = function() {
  return /** @type {!proto.LocktimeTier} */ (jspb.Message.getFieldProto3(this, 9, 0));
};


/** @param {!proto.LocktimeTier} value  */
proto.Delegation.prototype.setUpdateLocktimeTier = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional uint64 lock_time = 10;
 * @return {number}
 */
proto.Delegation.prototype.getLockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10, 0));
};


/** @param {number} value  */
proto.Delegation.prototype.setLockTime = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional DelegationState state = 11;
 * @return {!proto.DelegationState}
 */
proto.Delegation.prototype.getState = function() {
  return /** @type {!proto.DelegationState} */ (jspb.Message.getFieldProto3(this, 11, 0));
};


/** @param {!proto.DelegationState} value  */
proto.Delegation.prototype.setState = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional string referrer = 12;
 * @return {string}
 */
proto.Delegation.prototype.getReferrer = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 12, ""));
};


/** @param {string} value  */
proto.Delegation.prototype.setReferrer = function(value) {
  jspb.Message.setField(this, 12, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DelegationIndex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DelegationIndex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DelegationIndex.displayName = 'proto.DelegationIndex';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DelegationIndex.prototype.toObject = function(opt_includeInstance) {
  return proto.DelegationIndex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DelegationIndex} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DelegationIndex.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto_loom_pb.Address.toObject(includeInstance, f),
    delegator: (f = msg.getDelegator()) && proto_loom_pb.Address.toObject(includeInstance, f),
    index: msg.getIndex()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DelegationIndex}
 */
proto.DelegationIndex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DelegationIndex;
  return proto.DelegationIndex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DelegationIndex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DelegationIndex}
 */
proto.DelegationIndex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 2:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setDelegator(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DelegationIndex} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DelegationIndex.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DelegationIndex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DelegationIndex.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getDelegator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getIndex();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DelegationIndex} The clone.
 */
proto.DelegationIndex.prototype.cloneMessage = function() {
  return /** @type {!proto.DelegationIndex} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator = 1;
 * @return {proto.Address}
 */
proto.DelegationIndex.prototype.getValidator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DelegationIndex.prototype.setValidator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DelegationIndex.prototype.clearValidator = function() {
  this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DelegationIndex.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Address delegator = 2;
 * @return {proto.Address}
 */
proto.DelegationIndex.prototype.getDelegator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 2));
};


/** @param {proto.Address|undefined} value  */
proto.DelegationIndex.prototype.setDelegator = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.DelegationIndex.prototype.clearDelegator = function() {
  this.setDelegator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DelegationIndex.prototype.hasDelegator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 index = 3;
 * @return {number}
 */
proto.DelegationIndex.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.DelegationIndex.prototype.setIndex = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DelegationList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DelegationList.repeatedFields_, null);
};
goog.inherits(proto.DelegationList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DelegationList.displayName = 'proto.DelegationList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DelegationList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DelegationList.prototype.toObject = function(opt_includeInstance) {
  return proto.DelegationList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DelegationList} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DelegationList.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.DelegationIndex.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DelegationList}
 */
proto.DelegationList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DelegationList;
  return proto.DelegationList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DelegationList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DelegationList}
 */
proto.DelegationList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DelegationIndex;
      reader.readMessage(value,proto.DelegationIndex.deserializeBinaryFromReader);
      msg.getDelegationsList().push(value);
      msg.setDelegationsList(msg.getDelegationsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DelegationList} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DelegationList.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DelegationList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DelegationList.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.DelegationIndex.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DelegationList} The clone.
 */
proto.DelegationList.prototype.cloneMessage = function() {
  return /** @type {!proto.DelegationList} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated DelegationIndex delegations = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.DelegationIndex>}
 */
proto.DelegationList.prototype.getDelegationsList = function() {
  return /** @type{!Array.<!proto.DelegationIndex>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DelegationIndex, 1));
};


/** @param {Array.<!proto.DelegationIndex>} value  */
proto.DelegationList.prototype.setDelegationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.DelegationList.prototype.clearDelegationsList = function() {
  this.setDelegationsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DPOSInitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DPOSInitRequest.repeatedFields_, null);
};
goog.inherits(proto.DPOSInitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DPOSInitRequest.displayName = 'proto.DPOSInitRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DPOSInitRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DPOSInitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DPOSInitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DPOSInitRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DPOSInitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && proto.Params.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.ValidatorV3.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DPOSInitRequest}
 */
proto.DPOSInitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DPOSInitRequest;
  return proto.DPOSInitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DPOSInitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DPOSInitRequest}
 */
proto.DPOSInitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Params;
      reader.readMessage(value,proto.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new proto.ValidatorV3;
      reader.readMessage(value,proto.ValidatorV3.deserializeBinaryFromReader);
      msg.getValidatorsList().push(value);
      msg.setValidatorsList(msg.getValidatorsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DPOSInitRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DPOSInitRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DPOSInitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DPOSInitRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Params.serializeBinaryToWriter
    );
  }
  f = this.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ValidatorV3.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DPOSInitRequest} The clone.
 */
proto.DPOSInitRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.DPOSInitRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Params params = 1;
 * @return {proto.Params}
 */
proto.DPOSInitRequest.prototype.getParams = function() {
  return /** @type{proto.Params} */ (
    jspb.Message.getWrapperField(this, proto.Params, 1));
};


/** @param {proto.Params|undefined} value  */
proto.DPOSInitRequest.prototype.setParams = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DPOSInitRequest.prototype.clearParams = function() {
  this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DPOSInitRequest.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ValidatorV3 validators = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ValidatorV3>}
 */
proto.DPOSInitRequest.prototype.getValidatorsList = function() {
  return /** @type{!Array.<!proto.ValidatorV3>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ValidatorV3, 2));
};


/** @param {Array.<!proto.ValidatorV3>} value  */
proto.DPOSInitRequest.prototype.setValidatorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.DPOSInitRequest.prototype.clearValidatorsList = function() {
  this.setValidatorsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DelegateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DelegateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DelegateRequest.displayName = 'proto.DelegateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DelegateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DelegateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DelegateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DelegateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: (f = msg.getValidatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    locktimeTier: msg.getLocktimeTier(),
    referrer: msg.getReferrer()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DelegateRequest}
 */
proto.DelegateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DelegateRequest;
  return proto.DelegateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DelegateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DelegateRequest}
 */
proto.DelegateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidatorAddress(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLocktimeTier(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferrer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DelegateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DelegateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DelegateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DelegateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidatorAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getLocktimeTier();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = this.getReferrer();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DelegateRequest} The clone.
 */
proto.DelegateRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.DelegateRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator_address = 1;
 * @return {proto.Address}
 */
proto.DelegateRequest.prototype.getValidatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DelegateRequest.prototype.setValidatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DelegateRequest.prototype.clearValidatorAddress = function() {
  this.setValidatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DelegateRequest.prototype.hasValidatorAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt amount = 2;
 * @return {proto.BigUInt}
 */
proto.DelegateRequest.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.DelegateRequest.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.DelegateRequest.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DelegateRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 locktime_tier = 3;
 * @return {number}
 */
proto.DelegateRequest.prototype.getLocktimeTier = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.DelegateRequest.prototype.setLocktimeTier = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string referrer = 4;
 * @return {string}
 */
proto.DelegateRequest.prototype.getReferrer = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.DelegateRequest.prototype.setReferrer = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RedelegateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RedelegateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RedelegateRequest.displayName = 'proto.RedelegateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RedelegateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RedelegateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RedelegateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RedelegateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: (f = msg.getValidatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    formerValidatorAddress: (f = msg.getFormerValidatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    index: msg.getIndex(),
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    newLocktimeTier: msg.getNewLocktimeTier(),
    referrer: msg.getReferrer()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RedelegateRequest}
 */
proto.RedelegateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RedelegateRequest;
  return proto.RedelegateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RedelegateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RedelegateRequest}
 */
proto.RedelegateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidatorAddress(value);
      break;
    case 2:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setFormerValidatorAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndex(value);
      break;
    case 4:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNewLocktimeTier(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferrer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RedelegateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RedelegateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RedelegateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RedelegateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidatorAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getFormerValidatorAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getIndex();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getNewLocktimeTier();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = this.getReferrer();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RedelegateRequest} The clone.
 */
proto.RedelegateRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.RedelegateRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator_address = 1;
 * @return {proto.Address}
 */
proto.RedelegateRequest.prototype.getValidatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.RedelegateRequest.prototype.setValidatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.RedelegateRequest.prototype.clearValidatorAddress = function() {
  this.setValidatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RedelegateRequest.prototype.hasValidatorAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Address former_validator_address = 2;
 * @return {proto.Address}
 */
proto.RedelegateRequest.prototype.getFormerValidatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 2));
};


/** @param {proto.Address|undefined} value  */
proto.RedelegateRequest.prototype.setFormerValidatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.RedelegateRequest.prototype.clearFormerValidatorAddress = function() {
  this.setFormerValidatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RedelegateRequest.prototype.hasFormerValidatorAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 index = 3;
 * @return {number}
 */
proto.RedelegateRequest.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.RedelegateRequest.prototype.setIndex = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional BigUInt amount = 4;
 * @return {proto.BigUInt}
 */
proto.RedelegateRequest.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 4));
};


/** @param {proto.BigUInt|undefined} value  */
proto.RedelegateRequest.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.RedelegateRequest.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RedelegateRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 new_locktime_tier = 5;
 * @return {number}
 */
proto.RedelegateRequest.prototype.getNewLocktimeTier = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.RedelegateRequest.prototype.setNewLocktimeTier = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string referrer = 6;
 * @return {string}
 */
proto.RedelegateRequest.prototype.getReferrer = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.RedelegateRequest.prototype.setReferrer = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConsolidateDelegationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConsolidateDelegationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ConsolidateDelegationsRequest.displayName = 'proto.ConsolidateDelegationsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConsolidateDelegationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ConsolidateDelegationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConsolidateDelegationsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ConsolidateDelegationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: (f = msg.getValidatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConsolidateDelegationsRequest}
 */
proto.ConsolidateDelegationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConsolidateDelegationsRequest;
  return proto.ConsolidateDelegationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConsolidateDelegationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConsolidateDelegationsRequest}
 */
proto.ConsolidateDelegationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidatorAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ConsolidateDelegationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ConsolidateDelegationsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConsolidateDelegationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ConsolidateDelegationsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidatorAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ConsolidateDelegationsRequest} The clone.
 */
proto.ConsolidateDelegationsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ConsolidateDelegationsRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator_address = 1;
 * @return {proto.Address}
 */
proto.ConsolidateDelegationsRequest.prototype.getValidatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.ConsolidateDelegationsRequest.prototype.setValidatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ConsolidateDelegationsRequest.prototype.clearValidatorAddress = function() {
  this.setValidatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ConsolidateDelegationsRequest.prototype.hasValidatorAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UnbondRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UnbondRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.UnbondRequest.displayName = 'proto.UnbondRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UnbondRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UnbondRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UnbondRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.UnbondRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: (f = msg.getValidatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    index: msg.getIndex()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UnbondRequest}
 */
proto.UnbondRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UnbondRequest;
  return proto.UnbondRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UnbondRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UnbondRequest}
 */
proto.UnbondRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidatorAddress(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.UnbondRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.UnbondRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UnbondRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.UnbondRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidatorAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getIndex();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.UnbondRequest} The clone.
 */
proto.UnbondRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.UnbondRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator_address = 1;
 * @return {proto.Address}
 */
proto.UnbondRequest.prototype.getValidatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.UnbondRequest.prototype.setValidatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.UnbondRequest.prototype.clearValidatorAddress = function() {
  this.setValidatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UnbondRequest.prototype.hasValidatorAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt amount = 2;
 * @return {proto.BigUInt}
 */
proto.UnbondRequest.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.UnbondRequest.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.UnbondRequest.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UnbondRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 index = 3;
 * @return {number}
 */
proto.UnbondRequest.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.UnbondRequest.prototype.setIndex = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WhitelistCandidateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WhitelistCandidateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.WhitelistCandidateRequest.displayName = 'proto.WhitelistCandidateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WhitelistCandidateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.WhitelistCandidateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WhitelistCandidateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.WhitelistCandidateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidateAddress: (f = msg.getCandidateAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    lockTimeTier: msg.getLockTimeTier()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WhitelistCandidateRequest}
 */
proto.WhitelistCandidateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WhitelistCandidateRequest;
  return proto.WhitelistCandidateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WhitelistCandidateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WhitelistCandidateRequest}
 */
proto.WhitelistCandidateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setCandidateAddress(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {!proto.LocktimeTier} */ (reader.readEnum());
      msg.setLockTimeTier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.WhitelistCandidateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.WhitelistCandidateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WhitelistCandidateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.WhitelistCandidateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCandidateAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getLockTimeTier();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.WhitelistCandidateRequest} The clone.
 */
proto.WhitelistCandidateRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.WhitelistCandidateRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address candidate_address = 1;
 * @return {proto.Address}
 */
proto.WhitelistCandidateRequest.prototype.getCandidateAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.WhitelistCandidateRequest.prototype.setCandidateAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.WhitelistCandidateRequest.prototype.clearCandidateAddress = function() {
  this.setCandidateAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.WhitelistCandidateRequest.prototype.hasCandidateAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt amount = 2;
 * @return {proto.BigUInt}
 */
proto.WhitelistCandidateRequest.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.WhitelistCandidateRequest.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.WhitelistCandidateRequest.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.WhitelistCandidateRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocktimeTier lock_time_tier = 3;
 * @return {!proto.LocktimeTier}
 */
proto.WhitelistCandidateRequest.prototype.getLockTimeTier = function() {
  return /** @type {!proto.LocktimeTier} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {!proto.LocktimeTier} value  */
proto.WhitelistCandidateRequest.prototype.setLockTimeTier = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveWhitelistedCandidateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveWhitelistedCandidateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RemoveWhitelistedCandidateRequest.displayName = 'proto.RemoveWhitelistedCandidateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveWhitelistedCandidateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveWhitelistedCandidateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveWhitelistedCandidateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RemoveWhitelistedCandidateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidateAddress: (f = msg.getCandidateAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveWhitelistedCandidateRequest}
 */
proto.RemoveWhitelistedCandidateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveWhitelistedCandidateRequest;
  return proto.RemoveWhitelistedCandidateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveWhitelistedCandidateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveWhitelistedCandidateRequest}
 */
proto.RemoveWhitelistedCandidateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setCandidateAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RemoveWhitelistedCandidateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RemoveWhitelistedCandidateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveWhitelistedCandidateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RemoveWhitelistedCandidateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCandidateAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RemoveWhitelistedCandidateRequest} The clone.
 */
proto.RemoveWhitelistedCandidateRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.RemoveWhitelistedCandidateRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address candidate_address = 1;
 * @return {proto.Address}
 */
proto.RemoveWhitelistedCandidateRequest.prototype.getCandidateAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.RemoveWhitelistedCandidateRequest.prototype.setCandidateAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.RemoveWhitelistedCandidateRequest.prototype.clearCandidateAddress = function() {
  this.setCandidateAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RemoveWhitelistedCandidateRequest.prototype.hasCandidateAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeWhitelistInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChangeWhitelistInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChangeWhitelistInfoRequest.displayName = 'proto.ChangeWhitelistInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeWhitelistInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeWhitelistInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeWhitelistInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ChangeWhitelistInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidateAddress: (f = msg.getCandidateAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    lockTimeTier: msg.getLockTimeTier()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeWhitelistInfoRequest}
 */
proto.ChangeWhitelistInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeWhitelistInfoRequest;
  return proto.ChangeWhitelistInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeWhitelistInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeWhitelistInfoRequest}
 */
proto.ChangeWhitelistInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setCandidateAddress(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {!proto.LocktimeTier} */ (reader.readEnum());
      msg.setLockTimeTier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ChangeWhitelistInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ChangeWhitelistInfoRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeWhitelistInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ChangeWhitelistInfoRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCandidateAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getLockTimeTier();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ChangeWhitelistInfoRequest} The clone.
 */
proto.ChangeWhitelistInfoRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ChangeWhitelistInfoRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address candidate_address = 1;
 * @return {proto.Address}
 */
proto.ChangeWhitelistInfoRequest.prototype.getCandidateAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.ChangeWhitelistInfoRequest.prototype.setCandidateAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ChangeWhitelistInfoRequest.prototype.clearCandidateAddress = function() {
  this.setCandidateAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ChangeWhitelistInfoRequest.prototype.hasCandidateAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt amount = 2;
 * @return {proto.BigUInt}
 */
proto.ChangeWhitelistInfoRequest.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.ChangeWhitelistInfoRequest.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ChangeWhitelistInfoRequest.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ChangeWhitelistInfoRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocktimeTier lock_time_tier = 3;
 * @return {!proto.LocktimeTier}
 */
proto.ChangeWhitelistInfoRequest.prototype.getLockTimeTier = function() {
  return /** @type {!proto.LocktimeTier} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {!proto.LocktimeTier} value  */
proto.ChangeWhitelistInfoRequest.prototype.setLockTimeTier = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckDelegationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CheckDelegationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckDelegationRequest.displayName = 'proto.CheckDelegationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckDelegationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckDelegationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckDelegationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckDelegationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: (f = msg.getValidatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    delegatorAddress: (f = msg.getDelegatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckDelegationRequest}
 */
proto.CheckDelegationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckDelegationRequest;
  return proto.CheckDelegationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckDelegationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckDelegationRequest}
 */
proto.CheckDelegationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidatorAddress(value);
      break;
    case 2:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setDelegatorAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckDelegationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckDelegationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckDelegationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckDelegationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidatorAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getDelegatorAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckDelegationRequest} The clone.
 */
proto.CheckDelegationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckDelegationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator_address = 1;
 * @return {proto.Address}
 */
proto.CheckDelegationRequest.prototype.getValidatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.CheckDelegationRequest.prototype.setValidatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckDelegationRequest.prototype.clearValidatorAddress = function() {
  this.setValidatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckDelegationRequest.prototype.hasValidatorAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Address delegator_address = 2;
 * @return {proto.Address}
 */
proto.CheckDelegationRequest.prototype.getDelegatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 2));
};


/** @param {proto.Address|undefined} value  */
proto.CheckDelegationRequest.prototype.setDelegatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.CheckDelegationRequest.prototype.clearDelegatorAddress = function() {
  this.setDelegatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckDelegationRequest.prototype.hasDelegatorAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckDelegationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CheckDelegationResponse.repeatedFields_, null);
};
goog.inherits(proto.CheckDelegationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckDelegationResponse.displayName = 'proto.CheckDelegationResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CheckDelegationResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckDelegationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckDelegationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckDelegationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckDelegationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    weightedAmount: (f = msg.getWeightedAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.Delegation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckDelegationResponse}
 */
proto.CheckDelegationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckDelegationResponse;
  return proto.CheckDelegationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckDelegationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckDelegationResponse}
 */
proto.CheckDelegationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setWeightedAmount(value);
      break;
    case 3:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.getDelegationsList().push(value);
      msg.setDelegationsList(msg.getDelegationsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckDelegationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckDelegationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckDelegationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckDelegationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getWeightedAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckDelegationResponse} The clone.
 */
proto.CheckDelegationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckDelegationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt amount = 1;
 * @return {proto.BigUInt}
 */
proto.CheckDelegationResponse.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.CheckDelegationResponse.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckDelegationResponse.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckDelegationResponse.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt weighted_amount = 2;
 * @return {proto.BigUInt}
 */
proto.CheckDelegationResponse.prototype.getWeightedAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.CheckDelegationResponse.prototype.setWeightedAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.CheckDelegationResponse.prototype.clearWeightedAmount = function() {
  this.setWeightedAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckDelegationResponse.prototype.hasWeightedAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Delegation delegations = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Delegation>}
 */
proto.CheckDelegationResponse.prototype.getDelegationsList = function() {
  return /** @type{!Array.<!proto.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Delegation, 3));
};


/** @param {Array.<!proto.Delegation>} value  */
proto.CheckDelegationResponse.prototype.setDelegationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.CheckDelegationResponse.prototype.clearDelegationsList = function() {
  this.setDelegationsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckRewardsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CheckRewardsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckRewardsRequest.displayName = 'proto.CheckRewardsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckRewardsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckRewardsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckRewardsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckRewardsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckRewardsRequest}
 */
proto.CheckRewardsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckRewardsRequest;
  return proto.CheckRewardsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckRewardsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckRewardsRequest}
 */
proto.CheckRewardsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckRewardsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckRewardsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckRewardsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckRewardsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckRewardsRequest} The clone.
 */
proto.CheckRewardsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckRewardsRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckRewardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CheckRewardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckRewardsResponse.displayName = 'proto.CheckRewardsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckRewardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckRewardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckRewardsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckRewardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalRewardDistribution: (f = msg.getTotalRewardDistribution()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckRewardsResponse}
 */
proto.CheckRewardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckRewardsResponse;
  return proto.CheckRewardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckRewardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckRewardsResponse}
 */
proto.CheckRewardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setTotalRewardDistribution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckRewardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckRewardsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckRewardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckRewardsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTotalRewardDistribution();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckRewardsResponse} The clone.
 */
proto.CheckRewardsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckRewardsResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt total_reward_distribution = 1;
 * @return {proto.BigUInt}
 */
proto.CheckRewardsResponse.prototype.getTotalRewardDistribution = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.CheckRewardsResponse.prototype.setTotalRewardDistribution = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckRewardsResponse.prototype.clearTotalRewardDistribution = function() {
  this.setTotalRewardDistribution(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckRewardsResponse.prototype.hasTotalRewardDistribution = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TotalDelegationRequestV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TotalDelegationRequestV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TotalDelegationRequestV3.displayName = 'proto.TotalDelegationRequestV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TotalDelegationRequestV3.prototype.toObject = function(opt_includeInstance) {
  return proto.TotalDelegationRequestV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TotalDelegationRequestV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.TotalDelegationRequestV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddress: (f = msg.getDelegatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TotalDelegationRequestV3}
 */
proto.TotalDelegationRequestV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TotalDelegationRequestV3;
  return proto.TotalDelegationRequestV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TotalDelegationRequestV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TotalDelegationRequestV3}
 */
proto.TotalDelegationRequestV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setDelegatorAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.TotalDelegationRequestV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.TotalDelegationRequestV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TotalDelegationRequestV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.TotalDelegationRequestV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegatorAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.TotalDelegationRequestV3} The clone.
 */
proto.TotalDelegationRequestV3.prototype.cloneMessage = function() {
  return /** @type {!proto.TotalDelegationRequestV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address delegator_address = 1;
 * @return {proto.Address}
 */
proto.TotalDelegationRequestV3.prototype.getDelegatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.TotalDelegationRequestV3.prototype.setDelegatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.TotalDelegationRequestV3.prototype.clearDelegatorAddress = function() {
  this.setDelegatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TotalDelegationRequestV3.prototype.hasDelegatorAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TotalDelegationResponseV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TotalDelegationResponseV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TotalDelegationResponseV3.displayName = 'proto.TotalDelegationResponseV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TotalDelegationResponseV3.prototype.toObject = function(opt_includeInstance) {
  return proto.TotalDelegationResponseV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TotalDelegationResponseV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.TotalDelegationResponseV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    weightedAmount: (f = msg.getWeightedAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TotalDelegationResponseV3}
 */
proto.TotalDelegationResponseV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TotalDelegationResponseV3;
  return proto.TotalDelegationResponseV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TotalDelegationResponseV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TotalDelegationResponseV3}
 */
proto.TotalDelegationResponseV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setWeightedAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.TotalDelegationResponseV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.TotalDelegationResponseV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TotalDelegationResponseV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.TotalDelegationResponseV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getWeightedAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.TotalDelegationResponseV3} The clone.
 */
proto.TotalDelegationResponseV3.prototype.cloneMessage = function() {
  return /** @type {!proto.TotalDelegationResponseV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt amount = 1;
 * @return {proto.BigUInt}
 */
proto.TotalDelegationResponseV3.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.TotalDelegationResponseV3.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.TotalDelegationResponseV3.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TotalDelegationResponseV3.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt weighted_amount = 2;
 * @return {proto.BigUInt}
 */
proto.TotalDelegationResponseV3.prototype.getWeightedAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.TotalDelegationResponseV3.prototype.setWeightedAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.TotalDelegationResponseV3.prototype.clearWeightedAmount = function() {
  this.setWeightedAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TotalDelegationResponseV3.prototype.hasWeightedAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckAllDelegationsRequestV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CheckAllDelegationsRequestV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckAllDelegationsRequestV3.displayName = 'proto.CheckAllDelegationsRequestV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckAllDelegationsRequestV3.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckAllDelegationsRequestV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckAllDelegationsRequestV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckAllDelegationsRequestV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddress: (f = msg.getDelegatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckAllDelegationsRequestV3}
 */
proto.CheckAllDelegationsRequestV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckAllDelegationsRequestV3;
  return proto.CheckAllDelegationsRequestV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckAllDelegationsRequestV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckAllDelegationsRequestV3}
 */
proto.CheckAllDelegationsRequestV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setDelegatorAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckAllDelegationsRequestV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckAllDelegationsRequestV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckAllDelegationsRequestV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckAllDelegationsRequestV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegatorAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckAllDelegationsRequestV3} The clone.
 */
proto.CheckAllDelegationsRequestV3.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckAllDelegationsRequestV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address delegator_address = 1;
 * @return {proto.Address}
 */
proto.CheckAllDelegationsRequestV3.prototype.getDelegatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.CheckAllDelegationsRequestV3.prototype.setDelegatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckAllDelegationsRequestV3.prototype.clearDelegatorAddress = function() {
  this.setDelegatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckAllDelegationsRequestV3.prototype.hasDelegatorAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckAllDelegationsResponseV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CheckAllDelegationsResponseV3.repeatedFields_, null);
};
goog.inherits(proto.CheckAllDelegationsResponseV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckAllDelegationsResponseV3.displayName = 'proto.CheckAllDelegationsResponseV3';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CheckAllDelegationsResponseV3.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckAllDelegationsResponseV3.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckAllDelegationsResponseV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckAllDelegationsResponseV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckAllDelegationsResponseV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    weightedAmount: (f = msg.getWeightedAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.Delegation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckAllDelegationsResponseV3}
 */
proto.CheckAllDelegationsResponseV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckAllDelegationsResponseV3;
  return proto.CheckAllDelegationsResponseV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckAllDelegationsResponseV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckAllDelegationsResponseV3}
 */
proto.CheckAllDelegationsResponseV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setWeightedAmount(value);
      break;
    case 3:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.getDelegationsList().push(value);
      msg.setDelegationsList(msg.getDelegationsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckAllDelegationsResponseV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckAllDelegationsResponseV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckAllDelegationsResponseV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckAllDelegationsResponseV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getWeightedAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckAllDelegationsResponseV3} The clone.
 */
proto.CheckAllDelegationsResponseV3.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckAllDelegationsResponseV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt amount = 1;
 * @return {proto.BigUInt}
 */
proto.CheckAllDelegationsResponseV3.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.CheckAllDelegationsResponseV3.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckAllDelegationsResponseV3.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckAllDelegationsResponseV3.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt weighted_amount = 2;
 * @return {proto.BigUInt}
 */
proto.CheckAllDelegationsResponseV3.prototype.getWeightedAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.CheckAllDelegationsResponseV3.prototype.setWeightedAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.CheckAllDelegationsResponseV3.prototype.clearWeightedAmount = function() {
  this.setWeightedAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckAllDelegationsResponseV3.prototype.hasWeightedAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Delegation delegations = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Delegation>}
 */
proto.CheckAllDelegationsResponseV3.prototype.getDelegationsList = function() {
  return /** @type{!Array.<!proto.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Delegation, 3));
};


/** @param {Array.<!proto.Delegation>} value  */
proto.CheckAllDelegationsResponseV3.prototype.setDelegationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.CheckAllDelegationsResponseV3.prototype.clearDelegationsList = function() {
  this.setDelegationsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckRewardDelegationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CheckRewardDelegationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckRewardDelegationRequest.displayName = 'proto.CheckRewardDelegationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckRewardDelegationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckRewardDelegationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckRewardDelegationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckRewardDelegationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: (f = msg.getValidatorAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckRewardDelegationRequest}
 */
proto.CheckRewardDelegationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckRewardDelegationRequest;
  return proto.CheckRewardDelegationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckRewardDelegationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckRewardDelegationRequest}
 */
proto.CheckRewardDelegationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidatorAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckRewardDelegationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckRewardDelegationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckRewardDelegationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckRewardDelegationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidatorAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckRewardDelegationRequest} The clone.
 */
proto.CheckRewardDelegationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckRewardDelegationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator_address = 1;
 * @return {proto.Address}
 */
proto.CheckRewardDelegationRequest.prototype.getValidatorAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.CheckRewardDelegationRequest.prototype.setValidatorAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckRewardDelegationRequest.prototype.clearValidatorAddress = function() {
  this.setValidatorAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckRewardDelegationRequest.prototype.hasValidatorAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckRewardDelegationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CheckRewardDelegationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckRewardDelegationResponse.displayName = 'proto.CheckRewardDelegationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckRewardDelegationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckRewardDelegationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckRewardDelegationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckRewardDelegationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegation: (f = msg.getDelegation()) && proto.Delegation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckRewardDelegationResponse}
 */
proto.CheckRewardDelegationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckRewardDelegationResponse;
  return proto.CheckRewardDelegationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckRewardDelegationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckRewardDelegationResponse}
 */
proto.CheckRewardDelegationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.setDelegation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckRewardDelegationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckRewardDelegationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckRewardDelegationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckRewardDelegationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckRewardDelegationResponse} The clone.
 */
proto.CheckRewardDelegationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckRewardDelegationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Delegation delegation = 1;
 * @return {proto.Delegation}
 */
proto.CheckRewardDelegationResponse.prototype.getDelegation = function() {
  return /** @type{proto.Delegation} */ (
    jspb.Message.getWrapperField(this, proto.Delegation, 1));
};


/** @param {proto.Delegation|undefined} value  */
proto.CheckRewardDelegationResponse.prototype.setDelegation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckRewardDelegationResponse.prototype.clearDelegation = function() {
  this.setDelegation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckRewardDelegationResponse.prototype.hasDelegation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DowntimeRecordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DowntimeRecordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DowntimeRecordRequest.displayName = 'proto.DowntimeRecordRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DowntimeRecordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DowntimeRecordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DowntimeRecordRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DowntimeRecordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DowntimeRecordRequest}
 */
proto.DowntimeRecordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DowntimeRecordRequest;
  return proto.DowntimeRecordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DowntimeRecordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DowntimeRecordRequest}
 */
proto.DowntimeRecordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DowntimeRecordRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DowntimeRecordRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DowntimeRecordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DowntimeRecordRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DowntimeRecordRequest} The clone.
 */
proto.DowntimeRecordRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.DowntimeRecordRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator = 1;
 * @return {proto.Address}
 */
proto.DowntimeRecordRequest.prototype.getValidator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DowntimeRecordRequest.prototype.setValidator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DowntimeRecordRequest.prototype.clearValidator = function() {
  this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DowntimeRecordRequest.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DowntimeRecordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DowntimeRecordResponse.repeatedFields_, null);
};
goog.inherits(proto.DowntimeRecordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DowntimeRecordResponse.displayName = 'proto.DowntimeRecordResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DowntimeRecordResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DowntimeRecordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DowntimeRecordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DowntimeRecordResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DowntimeRecordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    downtimeRecordsList: jspb.Message.toObjectList(msg.getDowntimeRecordsList(),
    proto.DowntimeRecord.toObject, includeInstance),
    periodLength: msg.getPeriodLength()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DowntimeRecordResponse}
 */
proto.DowntimeRecordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DowntimeRecordResponse;
  return proto.DowntimeRecordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DowntimeRecordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DowntimeRecordResponse}
 */
proto.DowntimeRecordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DowntimeRecord;
      reader.readMessage(value,proto.DowntimeRecord.deserializeBinaryFromReader);
      msg.getDowntimeRecordsList().push(value);
      msg.setDowntimeRecordsList(msg.getDowntimeRecordsList());
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPeriodLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DowntimeRecordResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DowntimeRecordResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DowntimeRecordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DowntimeRecordResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDowntimeRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.DowntimeRecord.serializeBinaryToWriter
    );
  }
  f = this.getPeriodLength();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DowntimeRecordResponse} The clone.
 */
proto.DowntimeRecordResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.DowntimeRecordResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated DowntimeRecord downtime_records = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.DowntimeRecord>}
 */
proto.DowntimeRecordResponse.prototype.getDowntimeRecordsList = function() {
  return /** @type{!Array.<!proto.DowntimeRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DowntimeRecord, 1));
};


/** @param {Array.<!proto.DowntimeRecord>} value  */
proto.DowntimeRecordResponse.prototype.setDowntimeRecordsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.DowntimeRecordResponse.prototype.clearDowntimeRecordsList = function() {
  this.setDowntimeRecordsList([]);
};


/**
 * optional uint64 period_length = 2;
 * @return {number}
 */
proto.DowntimeRecordResponse.prototype.getPeriodLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.DowntimeRecordResponse.prototype.setPeriodLength = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DowntimeRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DowntimeRecord.repeatedFields_, null);
};
goog.inherits(proto.DowntimeRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DowntimeRecord.displayName = 'proto.DowntimeRecord';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DowntimeRecord.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DowntimeRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.DowntimeRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DowntimeRecord} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DowntimeRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto_loom_pb.Address.toObject(includeInstance, f),
    periodsList: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DowntimeRecord}
 */
proto.DowntimeRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DowntimeRecord;
  return proto.DowntimeRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DowntimeRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DowntimeRecord}
 */
proto.DowntimeRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint64());
      msg.setPeriodsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DowntimeRecord} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DowntimeRecord.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DowntimeRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DowntimeRecord.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getPeriodsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DowntimeRecord} The clone.
 */
proto.DowntimeRecord.prototype.cloneMessage = function() {
  return /** @type {!proto.DowntimeRecord} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator = 1;
 * @return {proto.Address}
 */
proto.DowntimeRecord.prototype.getValidator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DowntimeRecord.prototype.setValidator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DowntimeRecord.prototype.clearValidator = function() {
  this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DowntimeRecord.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated uint64 periods = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.DowntimeRecord.prototype.getPeriodsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<number>} value  */
proto.DowntimeRecord.prototype.setPeriodsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.DowntimeRecord.prototype.clearPeriodsList = function() {
  jspb.Message.setField(this, 2, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RegisterCandidateRequestV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RegisterCandidateRequestV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RegisterCandidateRequestV3.displayName = 'proto.RegisterCandidateRequestV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RegisterCandidateRequestV3.prototype.toObject = function(opt_includeInstance) {
  return proto.RegisterCandidateRequestV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RegisterCandidateRequestV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RegisterCandidateRequestV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: msg.getPubKey_asB64(),
    fee: msg.getFee(),
    name: msg.getName(),
    description: msg.getDescription(),
    website: msg.getWebsite(),
    locktimeTier: msg.getLocktimeTier(),
    maxReferralPercentage: msg.getMaxReferralPercentage()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RegisterCandidateRequestV3}
 */
proto.RegisterCandidateRequestV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RegisterCandidateRequestV3;
  return proto.RegisterCandidateRequestV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RegisterCandidateRequestV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RegisterCandidateRequestV3}
 */
proto.RegisterCandidateRequestV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLocktimeTier(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxReferralPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RegisterCandidateRequestV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RegisterCandidateRequestV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RegisterCandidateRequestV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RegisterCandidateRequestV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPubKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getFee();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getWebsite();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getLocktimeTier();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = this.getMaxReferralPercentage();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RegisterCandidateRequestV3} The clone.
 */
proto.RegisterCandidateRequestV3.prototype.cloneMessage = function() {
  return /** @type {!proto.RegisterCandidateRequestV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes pub_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.RegisterCandidateRequestV3.prototype.getPubKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes pub_key = 1;
 * This is a type-conversion wrapper around `getPubKey()`
 * @return {string}
 */
proto.RegisterCandidateRequestV3.prototype.getPubKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubKey()));
};


/**
 * optional bytes pub_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubKey()`
 * @return {!Uint8Array}
 */
proto.RegisterCandidateRequestV3.prototype.getPubKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.RegisterCandidateRequestV3.prototype.setPubKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 fee = 2;
 * @return {number}
 */
proto.RegisterCandidateRequestV3.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.RegisterCandidateRequestV3.prototype.setFee = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.RegisterCandidateRequestV3.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.RegisterCandidateRequestV3.prototype.setName = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.RegisterCandidateRequestV3.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.RegisterCandidateRequestV3.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string website = 5;
 * @return {string}
 */
proto.RegisterCandidateRequestV3.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.RegisterCandidateRequestV3.prototype.setWebsite = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint64 locktime_tier = 6;
 * @return {number}
 */
proto.RegisterCandidateRequestV3.prototype.getLocktimeTier = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.RegisterCandidateRequestV3.prototype.setLocktimeTier = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint64 max_referral_percentage = 7;
 * @return {number}
 */
proto.RegisterCandidateRequestV3.prototype.getMaxReferralPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.RegisterCandidateRequestV3.prototype.setMaxReferralPercentage = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeCandidateFeeRequestV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChangeCandidateFeeRequestV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChangeCandidateFeeRequestV3.displayName = 'proto.ChangeCandidateFeeRequestV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeCandidateFeeRequestV3.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeCandidateFeeRequestV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeCandidateFeeRequestV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ChangeCandidateFeeRequestV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    fee: msg.getFee()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeCandidateFeeRequestV3}
 */
proto.ChangeCandidateFeeRequestV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeCandidateFeeRequestV3;
  return proto.ChangeCandidateFeeRequestV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeCandidateFeeRequestV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeCandidateFeeRequestV3}
 */
proto.ChangeCandidateFeeRequestV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ChangeCandidateFeeRequestV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ChangeCandidateFeeRequestV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeCandidateFeeRequestV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ChangeCandidateFeeRequestV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFee();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ChangeCandidateFeeRequestV3} The clone.
 */
proto.ChangeCandidateFeeRequestV3.prototype.cloneMessage = function() {
  return /** @type {!proto.ChangeCandidateFeeRequestV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 fee = 1;
 * @return {number}
 */
proto.ChangeCandidateFeeRequestV3.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.ChangeCandidateFeeRequestV3.prototype.setFee = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetMinCandidateFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetMinCandidateFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SetMinCandidateFeeRequest.displayName = 'proto.SetMinCandidateFeeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetMinCandidateFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SetMinCandidateFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetMinCandidateFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SetMinCandidateFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    minCandidateFee: msg.getMinCandidateFee()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetMinCandidateFeeRequest}
 */
proto.SetMinCandidateFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetMinCandidateFeeRequest;
  return proto.SetMinCandidateFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetMinCandidateFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetMinCandidateFeeRequest}
 */
proto.SetMinCandidateFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinCandidateFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SetMinCandidateFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetMinCandidateFeeRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetMinCandidateFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetMinCandidateFeeRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMinCandidateFee();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SetMinCandidateFeeRequest} The clone.
 */
proto.SetMinCandidateFeeRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.SetMinCandidateFeeRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 min_candidate_fee = 1;
 * @return {number}
 */
proto.SetMinCandidateFeeRequest.prototype.getMinCandidateFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.SetMinCandidateFeeRequest.prototype.setMinCandidateFee = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdateCandidateInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateCandidateInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.UpdateCandidateInfoRequest.displayName = 'proto.UpdateCandidateInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdateCandidateInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateCandidateInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateCandidateInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.UpdateCandidateInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    description: msg.getDescription(),
    website: msg.getWebsite(),
    maxReferralPercentage: msg.getMaxReferralPercentage()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdateCandidateInfoRequest}
 */
proto.UpdateCandidateInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateCandidateInfoRequest;
  return proto.UpdateCandidateInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateCandidateInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateCandidateInfoRequest}
 */
proto.UpdateCandidateInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxReferralPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.UpdateCandidateInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.UpdateCandidateInfoRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdateCandidateInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.UpdateCandidateInfoRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getWebsite();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getMaxReferralPercentage();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.UpdateCandidateInfoRequest} The clone.
 */
proto.UpdateCandidateInfoRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.UpdateCandidateInfoRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.UpdateCandidateInfoRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.UpdateCandidateInfoRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.UpdateCandidateInfoRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.UpdateCandidateInfoRequest.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string website = 3;
 * @return {string}
 */
proto.UpdateCandidateInfoRequest.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.UpdateCandidateInfoRequest.prototype.setWebsite = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 max_referral_percentage = 4;
 * @return {number}
 */
proto.UpdateCandidateInfoRequest.prototype.getMaxReferralPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.UpdateCandidateInfoRequest.prototype.setMaxReferralPercentage = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UnregisterCandidateRequestV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UnregisterCandidateRequestV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.UnregisterCandidateRequestV3.displayName = 'proto.UnregisterCandidateRequestV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UnregisterCandidateRequestV3.prototype.toObject = function(opt_includeInstance) {
  return proto.UnregisterCandidateRequestV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UnregisterCandidateRequestV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.UnregisterCandidateRequestV3.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UnregisterCandidateRequestV3}
 */
proto.UnregisterCandidateRequestV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UnregisterCandidateRequestV3;
  return proto.UnregisterCandidateRequestV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UnregisterCandidateRequestV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UnregisterCandidateRequestV3}
 */
proto.UnregisterCandidateRequestV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.UnregisterCandidateRequestV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.UnregisterCandidateRequestV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UnregisterCandidateRequestV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.UnregisterCandidateRequestV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.UnregisterCandidateRequestV3} The clone.
 */
proto.UnregisterCandidateRequestV3.prototype.cloneMessage = function() {
  return /** @type {!proto.UnregisterCandidateRequestV3} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TimeUntilElectionRequestV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TimeUntilElectionRequestV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TimeUntilElectionRequestV3.displayName = 'proto.TimeUntilElectionRequestV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TimeUntilElectionRequestV3.prototype.toObject = function(opt_includeInstance) {
  return proto.TimeUntilElectionRequestV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimeUntilElectionRequestV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.TimeUntilElectionRequestV3.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TimeUntilElectionRequestV3}
 */
proto.TimeUntilElectionRequestV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimeUntilElectionRequestV3;
  return proto.TimeUntilElectionRequestV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimeUntilElectionRequestV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimeUntilElectionRequestV3}
 */
proto.TimeUntilElectionRequestV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.TimeUntilElectionRequestV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.TimeUntilElectionRequestV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TimeUntilElectionRequestV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.TimeUntilElectionRequestV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.TimeUntilElectionRequestV3} The clone.
 */
proto.TimeUntilElectionRequestV3.prototype.cloneMessage = function() {
  return /** @type {!proto.TimeUntilElectionRequestV3} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TimeUntilElectionResponseV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TimeUntilElectionResponseV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TimeUntilElectionResponseV3.displayName = 'proto.TimeUntilElectionResponseV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TimeUntilElectionResponseV3.prototype.toObject = function(opt_includeInstance) {
  return proto.TimeUntilElectionResponseV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimeUntilElectionResponseV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.TimeUntilElectionResponseV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeUntilElection: msg.getTimeUntilElection()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TimeUntilElectionResponseV3}
 */
proto.TimeUntilElectionResponseV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimeUntilElectionResponseV3;
  return proto.TimeUntilElectionResponseV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimeUntilElectionResponseV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimeUntilElectionResponseV3}
 */
proto.TimeUntilElectionResponseV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeUntilElection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.TimeUntilElectionResponseV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.TimeUntilElectionResponseV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TimeUntilElectionResponseV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.TimeUntilElectionResponseV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTimeUntilElection();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.TimeUntilElectionResponseV3} The clone.
 */
proto.TimeUntilElectionResponseV3.prototype.cloneMessage = function() {
  return /** @type {!proto.TimeUntilElectionResponseV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 time_until_election = 1;
 * @return {number}
 */
proto.TimeUntilElectionResponseV3.prototype.getTimeUntilElection = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.TimeUntilElectionResponseV3.prototype.setTimeUntilElection = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListValidatorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListValidatorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListValidatorsRequest.displayName = 'proto.ListValidatorsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListValidatorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListValidatorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListValidatorsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ListValidatorsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListValidatorsRequest}
 */
proto.ListValidatorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListValidatorsRequest;
  return proto.ListValidatorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListValidatorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListValidatorsRequest}
 */
proto.ListValidatorsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ListValidatorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListValidatorsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListValidatorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListValidatorsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ListValidatorsRequest} The clone.
 */
proto.ListValidatorsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ListValidatorsRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListValidatorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListValidatorsResponse.repeatedFields_, null);
};
goog.inherits(proto.ListValidatorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListValidatorsResponse.displayName = 'proto.ListValidatorsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListValidatorsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListValidatorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListValidatorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListValidatorsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ListValidatorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statisticsList: jspb.Message.toObjectList(msg.getStatisticsList(),
    proto.ValidatorStatistic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListValidatorsResponse}
 */
proto.ListValidatorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListValidatorsResponse;
  return proto.ListValidatorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListValidatorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListValidatorsResponse}
 */
proto.ListValidatorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ValidatorStatistic;
      reader.readMessage(value,proto.ValidatorStatistic.deserializeBinaryFromReader);
      msg.getStatisticsList().push(value);
      msg.setStatisticsList(msg.getStatisticsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ListValidatorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListValidatorsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListValidatorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListValidatorsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ValidatorStatistic.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ListValidatorsResponse} The clone.
 */
proto.ListValidatorsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ListValidatorsResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated ValidatorStatistic statistics = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ValidatorStatistic>}
 */
proto.ListValidatorsResponse.prototype.getStatisticsList = function() {
  return /** @type{!Array.<!proto.ValidatorStatistic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ValidatorStatistic, 1));
};


/** @param {Array.<!proto.ValidatorStatistic>} value  */
proto.ListValidatorsResponse.prototype.setStatisticsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.ListValidatorsResponse.prototype.clearStatisticsList = function() {
  this.setStatisticsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListCandidatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListCandidatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListCandidatesRequest.displayName = 'proto.ListCandidatesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListCandidatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListCandidatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListCandidatesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ListCandidatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListCandidatesRequest}
 */
proto.ListCandidatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListCandidatesRequest;
  return proto.ListCandidatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListCandidatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListCandidatesRequest}
 */
proto.ListCandidatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ListCandidatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListCandidatesRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListCandidatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListCandidatesRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ListCandidatesRequest} The clone.
 */
proto.ListCandidatesRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ListCandidatesRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListCandidatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListCandidatesResponse.repeatedFields_, null);
};
goog.inherits(proto.ListCandidatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListCandidatesResponse.displayName = 'proto.ListCandidatesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListCandidatesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListCandidatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListCandidatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListCandidatesResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ListCandidatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidatesList: jspb.Message.toObjectList(msg.getCandidatesList(),
    proto.CandidateStatistic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListCandidatesResponse}
 */
proto.ListCandidatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListCandidatesResponse;
  return proto.ListCandidatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListCandidatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListCandidatesResponse}
 */
proto.ListCandidatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.CandidateStatistic;
      reader.readMessage(value,proto.CandidateStatistic.deserializeBinaryFromReader);
      msg.getCandidatesList().push(value);
      msg.setCandidatesList(msg.getCandidatesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ListCandidatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListCandidatesResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListCandidatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListCandidatesResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCandidatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.CandidateStatistic.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ListCandidatesResponse} The clone.
 */
proto.ListCandidatesResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ListCandidatesResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated CandidateStatistic candidates = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.CandidateStatistic>}
 */
proto.ListCandidatesResponse.prototype.getCandidatesList = function() {
  return /** @type{!Array.<!proto.CandidateStatistic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CandidateStatistic, 1));
};


/** @param {Array.<!proto.CandidateStatistic>} value  */
proto.ListCandidatesResponse.prototype.setCandidatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.ListCandidatesResponse.prototype.clearCandidatesList = function() {
  this.setCandidatesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListDelegationsRequestV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListDelegationsRequestV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListDelegationsRequestV3.displayName = 'proto.ListDelegationsRequestV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListDelegationsRequestV3.prototype.toObject = function(opt_includeInstance) {
  return proto.ListDelegationsRequestV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListDelegationsRequestV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ListDelegationsRequestV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidate: (f = msg.getCandidate()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListDelegationsRequestV3}
 */
proto.ListDelegationsRequestV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListDelegationsRequestV3;
  return proto.ListDelegationsRequestV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListDelegationsRequestV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListDelegationsRequestV3}
 */
proto.ListDelegationsRequestV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setCandidate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ListDelegationsRequestV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListDelegationsRequestV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListDelegationsRequestV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListDelegationsRequestV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCandidate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ListDelegationsRequestV3} The clone.
 */
proto.ListDelegationsRequestV3.prototype.cloneMessage = function() {
  return /** @type {!proto.ListDelegationsRequestV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address candidate = 1;
 * @return {proto.Address}
 */
proto.ListDelegationsRequestV3.prototype.getCandidate = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.ListDelegationsRequestV3.prototype.setCandidate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ListDelegationsRequestV3.prototype.clearCandidate = function() {
  this.setCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ListDelegationsRequestV3.prototype.hasCandidate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListDelegationsResponseV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListDelegationsResponseV3.repeatedFields_, null);
};
goog.inherits(proto.ListDelegationsResponseV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListDelegationsResponseV3.displayName = 'proto.ListDelegationsResponseV3';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListDelegationsResponseV3.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListDelegationsResponseV3.prototype.toObject = function(opt_includeInstance) {
  return proto.ListDelegationsResponseV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListDelegationsResponseV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ListDelegationsResponseV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.Delegation.toObject, includeInstance),
    delegationTotal: (f = msg.getDelegationTotal()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListDelegationsResponseV3}
 */
proto.ListDelegationsResponseV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListDelegationsResponseV3;
  return proto.ListDelegationsResponseV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListDelegationsResponseV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListDelegationsResponseV3}
 */
proto.ListDelegationsResponseV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.getDelegationsList().push(value);
      msg.setDelegationsList(msg.getDelegationsList());
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setDelegationTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ListDelegationsResponseV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListDelegationsResponseV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListDelegationsResponseV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListDelegationsResponseV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
  f = this.getDelegationTotal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ListDelegationsResponseV3} The clone.
 */
proto.ListDelegationsResponseV3.prototype.cloneMessage = function() {
  return /** @type {!proto.ListDelegationsResponseV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Delegation delegations = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Delegation>}
 */
proto.ListDelegationsResponseV3.prototype.getDelegationsList = function() {
  return /** @type{!Array.<!proto.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Delegation, 1));
};


/** @param {Array.<!proto.Delegation>} value  */
proto.ListDelegationsResponseV3.prototype.setDelegationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.ListDelegationsResponseV3.prototype.clearDelegationsList = function() {
  this.setDelegationsList([]);
};


/**
 * optional BigUInt delegation_total = 2;
 * @return {proto.BigUInt}
 */
proto.ListDelegationsResponseV3.prototype.getDelegationTotal = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.ListDelegationsResponseV3.prototype.setDelegationTotal = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ListDelegationsResponseV3.prototype.clearDelegationTotal = function() {
  this.setDelegationTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ListDelegationsResponseV3.prototype.hasDelegationTotal = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListAllDelegationsRequestV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListAllDelegationsRequestV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListAllDelegationsRequestV3.displayName = 'proto.ListAllDelegationsRequestV3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListAllDelegationsRequestV3.prototype.toObject = function(opt_includeInstance) {
  return proto.ListAllDelegationsRequestV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListAllDelegationsRequestV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ListAllDelegationsRequestV3.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListAllDelegationsRequestV3}
 */
proto.ListAllDelegationsRequestV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListAllDelegationsRequestV3;
  return proto.ListAllDelegationsRequestV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListAllDelegationsRequestV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListAllDelegationsRequestV3}
 */
proto.ListAllDelegationsRequestV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ListAllDelegationsRequestV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListAllDelegationsRequestV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListAllDelegationsRequestV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListAllDelegationsRequestV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ListAllDelegationsRequestV3} The clone.
 */
proto.ListAllDelegationsRequestV3.prototype.cloneMessage = function() {
  return /** @type {!proto.ListAllDelegationsRequestV3} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListAllDelegationsResponseV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListAllDelegationsResponseV3.repeatedFields_, null);
};
goog.inherits(proto.ListAllDelegationsResponseV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListAllDelegationsResponseV3.displayName = 'proto.ListAllDelegationsResponseV3';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListAllDelegationsResponseV3.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListAllDelegationsResponseV3.prototype.toObject = function(opt_includeInstance) {
  return proto.ListAllDelegationsResponseV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListAllDelegationsResponseV3} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ListAllDelegationsResponseV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    listResponsesList: jspb.Message.toObjectList(msg.getListResponsesList(),
    proto.ListDelegationsResponseV3.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListAllDelegationsResponseV3}
 */
proto.ListAllDelegationsResponseV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListAllDelegationsResponseV3;
  return proto.ListAllDelegationsResponseV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListAllDelegationsResponseV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListAllDelegationsResponseV3}
 */
proto.ListAllDelegationsResponseV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ListDelegationsResponseV3;
      reader.readMessage(value,proto.ListDelegationsResponseV3.deserializeBinaryFromReader);
      msg.getListResponsesList().push(value);
      msg.setListResponsesList(msg.getListResponsesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ListAllDelegationsResponseV3} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListAllDelegationsResponseV3.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListAllDelegationsResponseV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ListAllDelegationsResponseV3.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getListResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ListDelegationsResponseV3.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ListAllDelegationsResponseV3} The clone.
 */
proto.ListAllDelegationsResponseV3.prototype.cloneMessage = function() {
  return /** @type {!proto.ListAllDelegationsResponseV3} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated ListDelegationsResponseV3 list_responses = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ListDelegationsResponseV3>}
 */
proto.ListAllDelegationsResponseV3.prototype.getListResponsesList = function() {
  return /** @type{!Array.<!proto.ListDelegationsResponseV3>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ListDelegationsResponseV3, 1));
};


/** @param {Array.<!proto.ListDelegationsResponseV3>} value  */
proto.ListAllDelegationsResponseV3.prototype.setListResponsesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.ListAllDelegationsResponseV3.prototype.clearListResponsesList = function() {
  this.setListResponsesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.BatchRequest.oneofGroups_);
};
goog.inherits(proto.BatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BatchRequest.displayName = 'proto.BatchRequest';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.BatchRequest.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.BatchRequest.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  WHITELIST_CANDIDATE: 1
};

/**
 * @return {proto.BatchRequest.PayloadCase}
 */
proto.BatchRequest.prototype.getPayloadCase = function() {
  return /** @type {proto.BatchRequest.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.BatchRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.BatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BatchRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.BatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistCandidate: (f = msg.getWhitelistCandidate()) && proto.WhitelistCandidateRequest.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && proto.BatchRequestMeta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BatchRequest}
 */
proto.BatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BatchRequest;
  return proto.BatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BatchRequest}
 */
proto.BatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.WhitelistCandidateRequest;
      reader.readMessage(value,proto.WhitelistCandidateRequest.deserializeBinaryFromReader);
      msg.setWhitelistCandidate(value);
      break;
    case 2:
      var value = new proto.BatchRequestMeta;
      reader.readMessage(value,proto.BatchRequestMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.BatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BatchRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BatchRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getWhitelistCandidate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.WhitelistCandidateRequest.serializeBinaryToWriter
    );
  }
  f = this.getMeta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.BatchRequestMeta.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.BatchRequest} The clone.
 */
proto.BatchRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.BatchRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional WhitelistCandidateRequest whitelist_candidate = 1;
 * @return {proto.WhitelistCandidateRequest}
 */
proto.BatchRequest.prototype.getWhitelistCandidate = function() {
  return /** @type{proto.WhitelistCandidateRequest} */ (
    jspb.Message.getWrapperField(this, proto.WhitelistCandidateRequest, 1));
};


/** @param {proto.WhitelistCandidateRequest|undefined} value  */
proto.BatchRequest.prototype.setWhitelistCandidate = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.BatchRequest.oneofGroups_[0], value);
};


proto.BatchRequest.prototype.clearWhitelistCandidate = function() {
  this.setWhitelistCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.BatchRequest.prototype.hasWhitelistCandidate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BatchRequestMeta meta = 2;
 * @return {proto.BatchRequestMeta}
 */
proto.BatchRequest.prototype.getMeta = function() {
  return /** @type{proto.BatchRequestMeta} */ (
    jspb.Message.getWrapperField(this, proto.BatchRequestMeta, 2));
};


/** @param {proto.BatchRequestMeta|undefined} value  */
proto.BatchRequest.prototype.setMeta = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.BatchRequest.prototype.clearMeta = function() {
  this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.BatchRequest.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BatchRequestMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BatchRequestMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BatchRequestMeta.displayName = 'proto.BatchRequestMeta';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BatchRequestMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.BatchRequestMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BatchRequestMeta} msg The msg instance to transform.
 * @return {!Object}
 */
proto.BatchRequestMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockNumber: msg.getBlockNumber(),
    txIndex: msg.getTxIndex(),
    logIndex: msg.getLogIndex()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BatchRequestMeta}
 */
proto.BatchRequestMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BatchRequestMeta;
  return proto.BatchRequestMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BatchRequestMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BatchRequestMeta}
 */
proto.BatchRequestMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLogIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.BatchRequestMeta} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BatchRequestMeta.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BatchRequestMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BatchRequestMeta.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getTxIndex();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = this.getLogIndex();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.BatchRequestMeta} The clone.
 */
proto.BatchRequestMeta.prototype.cloneMessage = function() {
  return /** @type {!proto.BatchRequestMeta} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 block_number = 1;
 * @return {number}
 */
proto.BatchRequestMeta.prototype.getBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.BatchRequestMeta.prototype.setBlockNumber = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 tx_index = 2;
 * @return {number}
 */
proto.BatchRequestMeta.prototype.getTxIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.BatchRequestMeta.prototype.setTxIndex = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 log_index = 3;
 * @return {number}
 */
proto.BatchRequestMeta.prototype.getLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.BatchRequestMeta.prototype.setLogIndex = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RequestBatchTally = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RequestBatchTally, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RequestBatchTally.displayName = 'proto.RequestBatchTally';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RequestBatchTally.prototype.toObject = function(opt_includeInstance) {
  return proto.RequestBatchTally.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RequestBatchTally} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RequestBatchTally.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastSeenBlockNumber: msg.getLastSeenBlockNumber(),
    lastSeenTxIndex: msg.getLastSeenTxIndex(),
    lastSeenLogIndex: msg.getLastSeenLogIndex()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RequestBatchTally}
 */
proto.RequestBatchTally.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RequestBatchTally;
  return proto.RequestBatchTally.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RequestBatchTally} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RequestBatchTally}
 */
proto.RequestBatchTally.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastSeenBlockNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastSeenTxIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastSeenLogIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RequestBatchTally} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RequestBatchTally.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RequestBatchTally.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RequestBatchTally.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLastSeenBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getLastSeenTxIndex();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = this.getLastSeenLogIndex();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RequestBatchTally} The clone.
 */
proto.RequestBatchTally.prototype.cloneMessage = function() {
  return /** @type {!proto.RequestBatchTally} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 last_seen_block_number = 1;
 * @return {number}
 */
proto.RequestBatchTally.prototype.getLastSeenBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.RequestBatchTally.prototype.setLastSeenBlockNumber = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 last_seen_tx_index = 2;
 * @return {number}
 */
proto.RequestBatchTally.prototype.getLastSeenTxIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.RequestBatchTally.prototype.setLastSeenTxIndex = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 last_seen_log_index = 3;
 * @return {number}
 */
proto.RequestBatchTally.prototype.getLastSeenLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.RequestBatchTally.prototype.setLastSeenLogIndex = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RequestBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RequestBatch.repeatedFields_, null);
};
goog.inherits(proto.RequestBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RequestBatch.displayName = 'proto.RequestBatch';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RequestBatch.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RequestBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.RequestBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RequestBatch} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RequestBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchList: jspb.Message.toObjectList(msg.getBatchList(),
    proto.BatchRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RequestBatch}
 */
proto.RequestBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RequestBatch;
  return proto.RequestBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RequestBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RequestBatch}
 */
proto.RequestBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.BatchRequest;
      reader.readMessage(value,proto.BatchRequest.deserializeBinaryFromReader);
      msg.getBatchList().push(value);
      msg.setBatchList(msg.getBatchList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RequestBatch} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RequestBatch.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RequestBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RequestBatch.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBatchList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.BatchRequest.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RequestBatch} The clone.
 */
proto.RequestBatch.prototype.cloneMessage = function() {
  return /** @type {!proto.RequestBatch} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated BatchRequest batch = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.BatchRequest>}
 */
proto.RequestBatch.prototype.getBatchList = function() {
  return /** @type{!Array.<!proto.BatchRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.BatchRequest, 1));
};


/** @param {Array.<!proto.BatchRequest>} value  */
proto.RequestBatch.prototype.setBatchList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.RequestBatch.prototype.clearBatchList = function() {
  this.setBatchList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetRequestBatchTallyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetRequestBatchTallyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetRequestBatchTallyRequest.displayName = 'proto.GetRequestBatchTallyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetRequestBatchTallyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetRequestBatchTallyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetRequestBatchTallyRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetRequestBatchTallyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetRequestBatchTallyRequest}
 */
proto.GetRequestBatchTallyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetRequestBatchTallyRequest;
  return proto.GetRequestBatchTallyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetRequestBatchTallyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetRequestBatchTallyRequest}
 */
proto.GetRequestBatchTallyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetRequestBatchTallyRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetRequestBatchTallyRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetRequestBatchTallyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetRequestBatchTallyRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetRequestBatchTallyRequest} The clone.
 */
proto.GetRequestBatchTallyRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.GetRequestBatchTallyRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RegisterReferrerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RegisterReferrerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RegisterReferrerRequest.displayName = 'proto.RegisterReferrerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RegisterReferrerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RegisterReferrerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RegisterReferrerRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RegisterReferrerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    address: (f = msg.getAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RegisterReferrerRequest}
 */
proto.RegisterReferrerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RegisterReferrerRequest;
  return proto.RegisterReferrerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RegisterReferrerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RegisterReferrerRequest}
 */
proto.RegisterReferrerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RegisterReferrerRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RegisterReferrerRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RegisterReferrerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RegisterReferrerRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RegisterReferrerRequest} The clone.
 */
proto.RegisterReferrerRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.RegisterReferrerRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.RegisterReferrerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.RegisterReferrerRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Address address = 2;
 * @return {proto.Address}
 */
proto.RegisterReferrerRequest.prototype.getAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 2));
};


/** @param {proto.Address|undefined} value  */
proto.RegisterReferrerRequest.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.RegisterReferrerRequest.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RegisterReferrerRequest.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetElectionCycleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetElectionCycleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SetElectionCycleRequest.displayName = 'proto.SetElectionCycleRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetElectionCycleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SetElectionCycleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetElectionCycleRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SetElectionCycleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    electionCycle: msg.getElectionCycle()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetElectionCycleRequest}
 */
proto.SetElectionCycleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetElectionCycleRequest;
  return proto.SetElectionCycleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetElectionCycleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetElectionCycleRequest}
 */
proto.SetElectionCycleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setElectionCycle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SetElectionCycleRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetElectionCycleRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetElectionCycleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetElectionCycleRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getElectionCycle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SetElectionCycleRequest} The clone.
 */
proto.SetElectionCycleRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.SetElectionCycleRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 election_cycle = 1;
 * @return {number}
 */
proto.SetElectionCycleRequest.prototype.getElectionCycle = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.SetElectionCycleRequest.prototype.setElectionCycle = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetDowntimePeriodRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetDowntimePeriodRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SetDowntimePeriodRequest.displayName = 'proto.SetDowntimePeriodRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetDowntimePeriodRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SetDowntimePeriodRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetDowntimePeriodRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SetDowntimePeriodRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    downtimePeriod: msg.getDowntimePeriod()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetDowntimePeriodRequest}
 */
proto.SetDowntimePeriodRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetDowntimePeriodRequest;
  return proto.SetDowntimePeriodRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetDowntimePeriodRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetDowntimePeriodRequest}
 */
proto.SetDowntimePeriodRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDowntimePeriod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SetDowntimePeriodRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetDowntimePeriodRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetDowntimePeriodRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetDowntimePeriodRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDowntimePeriod();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SetDowntimePeriodRequest} The clone.
 */
proto.SetDowntimePeriodRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.SetDowntimePeriodRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 downtime_period = 1;
 * @return {number}
 */
proto.SetDowntimePeriodRequest.prototype.getDowntimePeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.SetDowntimePeriodRequest.prototype.setDowntimePeriod = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetMaxYearlyRewardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetMaxYearlyRewardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SetMaxYearlyRewardRequest.displayName = 'proto.SetMaxYearlyRewardRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetMaxYearlyRewardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SetMaxYearlyRewardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetMaxYearlyRewardRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SetMaxYearlyRewardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxYearlyReward: (f = msg.getMaxYearlyReward()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetMaxYearlyRewardRequest}
 */
proto.SetMaxYearlyRewardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetMaxYearlyRewardRequest;
  return proto.SetMaxYearlyRewardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetMaxYearlyRewardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetMaxYearlyRewardRequest}
 */
proto.SetMaxYearlyRewardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setMaxYearlyReward(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SetMaxYearlyRewardRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetMaxYearlyRewardRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetMaxYearlyRewardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetMaxYearlyRewardRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMaxYearlyReward();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SetMaxYearlyRewardRequest} The clone.
 */
proto.SetMaxYearlyRewardRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.SetMaxYearlyRewardRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt max_yearly_reward = 1;
 * @return {proto.BigUInt}
 */
proto.SetMaxYearlyRewardRequest.prototype.getMaxYearlyReward = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.SetMaxYearlyRewardRequest.prototype.setMaxYearlyReward = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SetMaxYearlyRewardRequest.prototype.clearMaxYearlyReward = function() {
  this.setMaxYearlyReward(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SetMaxYearlyRewardRequest.prototype.hasMaxYearlyReward = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetRegistrationRequirementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetRegistrationRequirementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SetRegistrationRequirementRequest.displayName = 'proto.SetRegistrationRequirementRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetRegistrationRequirementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SetRegistrationRequirementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetRegistrationRequirementRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SetRegistrationRequirementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    registrationRequirement: (f = msg.getRegistrationRequirement()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetRegistrationRequirementRequest}
 */
proto.SetRegistrationRequirementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetRegistrationRequirementRequest;
  return proto.SetRegistrationRequirementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetRegistrationRequirementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetRegistrationRequirementRequest}
 */
proto.SetRegistrationRequirementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setRegistrationRequirement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SetRegistrationRequirementRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetRegistrationRequirementRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetRegistrationRequirementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetRegistrationRequirementRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRegistrationRequirement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SetRegistrationRequirementRequest} The clone.
 */
proto.SetRegistrationRequirementRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.SetRegistrationRequirementRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt registration_requirement = 1;
 * @return {proto.BigUInt}
 */
proto.SetRegistrationRequirementRequest.prototype.getRegistrationRequirement = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.SetRegistrationRequirementRequest.prototype.setRegistrationRequirement = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SetRegistrationRequirementRequest.prototype.clearRegistrationRequirement = function() {
  this.setRegistrationRequirement(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SetRegistrationRequirementRequest.prototype.hasRegistrationRequirement = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetValidatorCountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetValidatorCountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SetValidatorCountRequest.displayName = 'proto.SetValidatorCountRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetValidatorCountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SetValidatorCountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetValidatorCountRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SetValidatorCountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorCount: msg.getValidatorCount()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetValidatorCountRequest}
 */
proto.SetValidatorCountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetValidatorCountRequest;
  return proto.SetValidatorCountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetValidatorCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetValidatorCountRequest}
 */
proto.SetValidatorCountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidatorCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SetValidatorCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetValidatorCountRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetValidatorCountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetValidatorCountRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidatorCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SetValidatorCountRequest} The clone.
 */
proto.SetValidatorCountRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.SetValidatorCountRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 validator_count = 1;
 * @return {number}
 */
proto.SetValidatorCountRequest.prototype.getValidatorCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.SetValidatorCountRequest.prototype.setValidatorCount = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetOracleAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetOracleAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SetOracleAddressRequest.displayName = 'proto.SetOracleAddressRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetOracleAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SetOracleAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetOracleAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SetOracleAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    oracleAddress: (f = msg.getOracleAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetOracleAddressRequest}
 */
proto.SetOracleAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetOracleAddressRequest;
  return proto.SetOracleAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetOracleAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetOracleAddressRequest}
 */
proto.SetOracleAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setOracleAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SetOracleAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetOracleAddressRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetOracleAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetOracleAddressRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getOracleAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SetOracleAddressRequest} The clone.
 */
proto.SetOracleAddressRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.SetOracleAddressRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address oracle_address = 1;
 * @return {proto.Address}
 */
proto.SetOracleAddressRequest.prototype.getOracleAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.SetOracleAddressRequest.prototype.setOracleAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SetOracleAddressRequest.prototype.clearOracleAddress = function() {
  this.setOracleAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SetOracleAddressRequest.prototype.hasOracleAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetSlashingPercentagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetSlashingPercentagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SetSlashingPercentagesRequest.displayName = 'proto.SetSlashingPercentagesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetSlashingPercentagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SetSlashingPercentagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetSlashingPercentagesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SetSlashingPercentagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    crashSlashingPercentage: (f = msg.getCrashSlashingPercentage()) && proto_loom_pb.BigUInt.toObject(includeInstance, f),
    byzantineSlashingPercentage: (f = msg.getByzantineSlashingPercentage()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetSlashingPercentagesRequest}
 */
proto.SetSlashingPercentagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetSlashingPercentagesRequest;
  return proto.SetSlashingPercentagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetSlashingPercentagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetSlashingPercentagesRequest}
 */
proto.SetSlashingPercentagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setCrashSlashingPercentage(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setByzantineSlashingPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SetSlashingPercentagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetSlashingPercentagesRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetSlashingPercentagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SetSlashingPercentagesRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCrashSlashingPercentage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getByzantineSlashingPercentage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SetSlashingPercentagesRequest} The clone.
 */
proto.SetSlashingPercentagesRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.SetSlashingPercentagesRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt crash_slashing_percentage = 1;
 * @return {proto.BigUInt}
 */
proto.SetSlashingPercentagesRequest.prototype.getCrashSlashingPercentage = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.SetSlashingPercentagesRequest.prototype.setCrashSlashingPercentage = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SetSlashingPercentagesRequest.prototype.clearCrashSlashingPercentage = function() {
  this.setCrashSlashingPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SetSlashingPercentagesRequest.prototype.hasCrashSlashingPercentage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt byzantine_slashing_percentage = 2;
 * @return {proto.BigUInt}
 */
proto.SetSlashingPercentagesRequest.prototype.getByzantineSlashingPercentage = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.SetSlashingPercentagesRequest.prototype.setByzantineSlashingPercentage = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.SetSlashingPercentagesRequest.prototype.clearByzantineSlashingPercentage = function() {
  this.setByzantineSlashingPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SetSlashingPercentagesRequest.prototype.hasByzantineSlashingPercentage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetStateRequest.displayName = 'proto.GetStateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetStateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetStateRequest}
 */
proto.GetStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetStateRequest;
  return proto.GetStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetStateRequest}
 */
proto.GetStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetStateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetStateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetStateRequest} The clone.
 */
proto.GetStateRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.GetStateRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetStateResponse.displayName = 'proto.GetStateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetStateResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.State.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetStateResponse}
 */
proto.GetStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetStateResponse;
  return proto.GetStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetStateResponse}
 */
proto.GetStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.State;
      reader.readMessage(value,proto.State.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetStateResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetStateResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.State.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetStateResponse} The clone.
 */
proto.GetStateResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.GetStateResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional State state = 1;
 * @return {proto.State}
 */
proto.GetStateResponse.prototype.getState = function() {
  return /** @type{proto.State} */ (
    jspb.Message.getWrapperField(this, proto.State, 1));
};


/** @param {proto.State|undefined} value  */
proto.GetStateResponse.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.GetStateResponse.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetStateResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClaimDelegatorRewardsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClaimDelegatorRewardsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ClaimDelegatorRewardsRequest.displayName = 'proto.ClaimDelegatorRewardsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClaimDelegatorRewardsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ClaimDelegatorRewardsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClaimDelegatorRewardsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ClaimDelegatorRewardsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClaimDelegatorRewardsRequest}
 */
proto.ClaimDelegatorRewardsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClaimDelegatorRewardsRequest;
  return proto.ClaimDelegatorRewardsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClaimDelegatorRewardsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClaimDelegatorRewardsRequest}
 */
proto.ClaimDelegatorRewardsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ClaimDelegatorRewardsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ClaimDelegatorRewardsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClaimDelegatorRewardsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ClaimDelegatorRewardsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ClaimDelegatorRewardsRequest} The clone.
 */
proto.ClaimDelegatorRewardsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ClaimDelegatorRewardsRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClaimDelegatorRewardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClaimDelegatorRewardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ClaimDelegatorRewardsResponse.displayName = 'proto.ClaimDelegatorRewardsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClaimDelegatorRewardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ClaimDelegatorRewardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClaimDelegatorRewardsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ClaimDelegatorRewardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClaimDelegatorRewardsResponse}
 */
proto.ClaimDelegatorRewardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClaimDelegatorRewardsResponse;
  return proto.ClaimDelegatorRewardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClaimDelegatorRewardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClaimDelegatorRewardsResponse}
 */
proto.ClaimDelegatorRewardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ClaimDelegatorRewardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ClaimDelegatorRewardsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClaimDelegatorRewardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ClaimDelegatorRewardsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ClaimDelegatorRewardsResponse} The clone.
 */
proto.ClaimDelegatorRewardsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ClaimDelegatorRewardsResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt amount = 1;
 * @return {proto.BigUInt}
 */
proto.ClaimDelegatorRewardsResponse.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.ClaimDelegatorRewardsResponse.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ClaimDelegatorRewardsResponse.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ClaimDelegatorRewardsResponse.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckDelegatorRewardsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CheckDelegatorRewardsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckDelegatorRewardsRequest.displayName = 'proto.CheckDelegatorRewardsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckDelegatorRewardsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckDelegatorRewardsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckDelegatorRewardsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckDelegatorRewardsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegator: (f = msg.getDelegator()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckDelegatorRewardsRequest}
 */
proto.CheckDelegatorRewardsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckDelegatorRewardsRequest;
  return proto.CheckDelegatorRewardsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckDelegatorRewardsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckDelegatorRewardsRequest}
 */
proto.CheckDelegatorRewardsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setDelegator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckDelegatorRewardsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckDelegatorRewardsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckDelegatorRewardsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckDelegatorRewardsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckDelegatorRewardsRequest} The clone.
 */
proto.CheckDelegatorRewardsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckDelegatorRewardsRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address delegator = 1;
 * @return {proto.Address}
 */
proto.CheckDelegatorRewardsRequest.prototype.getDelegator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.CheckDelegatorRewardsRequest.prototype.setDelegator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckDelegatorRewardsRequest.prototype.clearDelegator = function() {
  this.setDelegator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckDelegatorRewardsRequest.prototype.hasDelegator = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CheckDelegatorRewardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CheckDelegatorRewardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CheckDelegatorRewardsResponse.displayName = 'proto.CheckDelegatorRewardsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CheckDelegatorRewardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CheckDelegatorRewardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CheckDelegatorRewardsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CheckDelegatorRewardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CheckDelegatorRewardsResponse}
 */
proto.CheckDelegatorRewardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CheckDelegatorRewardsResponse;
  return proto.CheckDelegatorRewardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CheckDelegatorRewardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CheckDelegatorRewardsResponse}
 */
proto.CheckDelegatorRewardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CheckDelegatorRewardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckDelegatorRewardsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CheckDelegatorRewardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CheckDelegatorRewardsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CheckDelegatorRewardsResponse} The clone.
 */
proto.CheckDelegatorRewardsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.CheckDelegatorRewardsResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional BigUInt amount = 1;
 * @return {proto.BigUInt}
 */
proto.CheckDelegatorRewardsResponse.prototype.getAmount = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 1));
};


/** @param {proto.BigUInt|undefined} value  */
proto.CheckDelegatorRewardsResponse.prototype.setAmount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CheckDelegatorRewardsResponse.prototype.clearAmount = function() {
  this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CheckDelegatorRewardsResponse.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposElectionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposElectionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposElectionEvent.displayName = 'proto.DposElectionEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposElectionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposElectionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposElectionEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposElectionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockNumber: msg.getBlockNumber()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposElectionEvent}
 */
proto.DposElectionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposElectionEvent;
  return proto.DposElectionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposElectionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposElectionEvent}
 */
proto.DposElectionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposElectionEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposElectionEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposElectionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposElectionEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposElectionEvent} The clone.
 */
proto.DposElectionEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposElectionEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 block_number = 1;
 * @return {number}
 */
proto.DposElectionEvent.prototype.getBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.DposElectionEvent.prototype.setBlockNumber = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposSlashEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposSlashEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposSlashEvent.displayName = 'proto.DposSlashEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposSlashEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposSlashEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposSlashEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposSlashEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto_loom_pb.Address.toObject(includeInstance, f),
    slashPercentage: (f = msg.getSlashPercentage()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposSlashEvent}
 */
proto.DposSlashEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposSlashEvent;
  return proto.DposSlashEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposSlashEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposSlashEvent}
 */
proto.DposSlashEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 2:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setSlashPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposSlashEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposSlashEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposSlashEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposSlashEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getSlashPercentage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposSlashEvent} The clone.
 */
proto.DposSlashEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposSlashEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address validator = 1;
 * @return {proto.Address}
 */
proto.DposSlashEvent.prototype.getValidator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DposSlashEvent.prototype.setValidator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposSlashEvent.prototype.clearValidator = function() {
  this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposSlashEvent.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BigUInt slash_percentage = 2;
 * @return {proto.BigUInt}
 */
proto.DposSlashEvent.prototype.getSlashPercentage = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 2));
};


/** @param {proto.BigUInt|undefined} value  */
proto.DposSlashEvent.prototype.setSlashPercentage = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.DposSlashEvent.prototype.clearSlashPercentage = function() {
  this.setSlashPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposSlashEvent.prototype.hasSlashPercentage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposCandidateRegistersEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposCandidateRegistersEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposCandidateRegistersEvent.displayName = 'proto.DposCandidateRegistersEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposCandidateRegistersEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposCandidateRegistersEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposCandidateRegistersEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposCandidateRegistersEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    fee: msg.getFee()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposCandidateRegistersEvent}
 */
proto.DposCandidateRegistersEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposCandidateRegistersEvent;
  return proto.DposCandidateRegistersEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposCandidateRegistersEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposCandidateRegistersEvent}
 */
proto.DposCandidateRegistersEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposCandidateRegistersEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposCandidateRegistersEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposCandidateRegistersEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposCandidateRegistersEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getFee();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposCandidateRegistersEvent} The clone.
 */
proto.DposCandidateRegistersEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposCandidateRegistersEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address address = 1;
 * @return {proto.Address}
 */
proto.DposCandidateRegistersEvent.prototype.getAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DposCandidateRegistersEvent.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposCandidateRegistersEvent.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposCandidateRegistersEvent.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 fee = 2;
 * @return {number}
 */
proto.DposCandidateRegistersEvent.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.DposCandidateRegistersEvent.prototype.setFee = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposCandidateUnregistersEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposCandidateUnregistersEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposCandidateUnregistersEvent.displayName = 'proto.DposCandidateUnregistersEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposCandidateUnregistersEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposCandidateUnregistersEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposCandidateUnregistersEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposCandidateUnregistersEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposCandidateUnregistersEvent}
 */
proto.DposCandidateUnregistersEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposCandidateUnregistersEvent;
  return proto.DposCandidateUnregistersEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposCandidateUnregistersEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposCandidateUnregistersEvent}
 */
proto.DposCandidateUnregistersEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposCandidateUnregistersEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposCandidateUnregistersEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposCandidateUnregistersEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposCandidateUnregistersEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposCandidateUnregistersEvent} The clone.
 */
proto.DposCandidateUnregistersEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposCandidateUnregistersEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address address = 1;
 * @return {proto.Address}
 */
proto.DposCandidateUnregistersEvent.prototype.getAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DposCandidateUnregistersEvent.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposCandidateUnregistersEvent.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposCandidateUnregistersEvent.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposCandidateFeeChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposCandidateFeeChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposCandidateFeeChangeEvent.displayName = 'proto.DposCandidateFeeChangeEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposCandidateFeeChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposCandidateFeeChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposCandidateFeeChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposCandidateFeeChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto_loom_pb.Address.toObject(includeInstance, f),
    newFee: msg.getNewFee()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposCandidateFeeChangeEvent}
 */
proto.DposCandidateFeeChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposCandidateFeeChangeEvent;
  return proto.DposCandidateFeeChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposCandidateFeeChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposCandidateFeeChangeEvent}
 */
proto.DposCandidateFeeChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNewFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposCandidateFeeChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposCandidateFeeChangeEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposCandidateFeeChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposCandidateFeeChangeEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getNewFee();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposCandidateFeeChangeEvent} The clone.
 */
proto.DposCandidateFeeChangeEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposCandidateFeeChangeEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address address = 1;
 * @return {proto.Address}
 */
proto.DposCandidateFeeChangeEvent.prototype.getAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DposCandidateFeeChangeEvent.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposCandidateFeeChangeEvent.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposCandidateFeeChangeEvent.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 new_fee = 2;
 * @return {number}
 */
proto.DposCandidateFeeChangeEvent.prototype.getNewFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.DposCandidateFeeChangeEvent.prototype.setNewFee = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposUpdateCandidateInfoEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposUpdateCandidateInfoEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposUpdateCandidateInfoEvent.displayName = 'proto.DposUpdateCandidateInfoEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposUpdateCandidateInfoEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposUpdateCandidateInfoEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposUpdateCandidateInfoEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposUpdateCandidateInfoEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposUpdateCandidateInfoEvent}
 */
proto.DposUpdateCandidateInfoEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposUpdateCandidateInfoEvent;
  return proto.DposUpdateCandidateInfoEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposUpdateCandidateInfoEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposUpdateCandidateInfoEvent}
 */
proto.DposUpdateCandidateInfoEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposUpdateCandidateInfoEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposUpdateCandidateInfoEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposUpdateCandidateInfoEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposUpdateCandidateInfoEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposUpdateCandidateInfoEvent} The clone.
 */
proto.DposUpdateCandidateInfoEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposUpdateCandidateInfoEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address address = 1;
 * @return {proto.Address}
 */
proto.DposUpdateCandidateInfoEvent.prototype.getAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DposUpdateCandidateInfoEvent.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposUpdateCandidateInfoEvent.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposUpdateCandidateInfoEvent.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposDelegatorDelegatesEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposDelegatorDelegatesEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposDelegatorDelegatesEvent.displayName = 'proto.DposDelegatorDelegatesEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposDelegatorDelegatesEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposDelegatorDelegatesEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposDelegatorDelegatesEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposDelegatorDelegatesEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegation: (f = msg.getDelegation()) && proto.Delegation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposDelegatorDelegatesEvent}
 */
proto.DposDelegatorDelegatesEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposDelegatorDelegatesEvent;
  return proto.DposDelegatorDelegatesEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposDelegatorDelegatesEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposDelegatorDelegatesEvent}
 */
proto.DposDelegatorDelegatesEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.setDelegation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposDelegatorDelegatesEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorDelegatesEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposDelegatorDelegatesEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorDelegatesEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposDelegatorDelegatesEvent} The clone.
 */
proto.DposDelegatorDelegatesEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposDelegatorDelegatesEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Delegation delegation = 1;
 * @return {proto.Delegation}
 */
proto.DposDelegatorDelegatesEvent.prototype.getDelegation = function() {
  return /** @type{proto.Delegation} */ (
    jspb.Message.getWrapperField(this, proto.Delegation, 1));
};


/** @param {proto.Delegation|undefined} value  */
proto.DposDelegatorDelegatesEvent.prototype.setDelegation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposDelegatorDelegatesEvent.prototype.clearDelegation = function() {
  this.setDelegation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposDelegatorDelegatesEvent.prototype.hasDelegation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposDelegatorRedelegatesEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposDelegatorRedelegatesEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposDelegatorRedelegatesEvent.displayName = 'proto.DposDelegatorRedelegatesEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposDelegatorRedelegatesEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposDelegatorRedelegatesEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposDelegatorRedelegatesEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposDelegatorRedelegatesEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegation: (f = msg.getDelegation()) && proto.Delegation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposDelegatorRedelegatesEvent}
 */
proto.DposDelegatorRedelegatesEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposDelegatorRedelegatesEvent;
  return proto.DposDelegatorRedelegatesEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposDelegatorRedelegatesEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposDelegatorRedelegatesEvent}
 */
proto.DposDelegatorRedelegatesEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.setDelegation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposDelegatorRedelegatesEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorRedelegatesEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposDelegatorRedelegatesEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorRedelegatesEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposDelegatorRedelegatesEvent} The clone.
 */
proto.DposDelegatorRedelegatesEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposDelegatorRedelegatesEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Delegation delegation = 1;
 * @return {proto.Delegation}
 */
proto.DposDelegatorRedelegatesEvent.prototype.getDelegation = function() {
  return /** @type{proto.Delegation} */ (
    jspb.Message.getWrapperField(this, proto.Delegation, 1));
};


/** @param {proto.Delegation|undefined} value  */
proto.DposDelegatorRedelegatesEvent.prototype.setDelegation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposDelegatorRedelegatesEvent.prototype.clearDelegation = function() {
  this.setDelegation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposDelegatorRedelegatesEvent.prototype.hasDelegation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposDelegatorConsolidatesEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DposDelegatorConsolidatesEvent.repeatedFields_, null);
};
goog.inherits(proto.DposDelegatorConsolidatesEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposDelegatorConsolidatesEvent.displayName = 'proto.DposDelegatorConsolidatesEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DposDelegatorConsolidatesEvent.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposDelegatorConsolidatesEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposDelegatorConsolidatesEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposDelegatorConsolidatesEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposDelegatorConsolidatesEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    newDelegation: (f = msg.getNewDelegation()) && proto.Delegation.toObject(includeInstance, f),
    consolidatedDelegationsList: jspb.Message.toObjectList(msg.getConsolidatedDelegationsList(),
    proto.Delegation.toObject, includeInstance),
    unconsolidatedDelegationsCount: msg.getUnconsolidatedDelegationsCount()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposDelegatorConsolidatesEvent}
 */
proto.DposDelegatorConsolidatesEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposDelegatorConsolidatesEvent;
  return proto.DposDelegatorConsolidatesEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposDelegatorConsolidatesEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposDelegatorConsolidatesEvent}
 */
proto.DposDelegatorConsolidatesEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.setNewDelegation(value);
      break;
    case 2:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.getConsolidatedDelegationsList().push(value);
      msg.setConsolidatedDelegationsList(msg.getConsolidatedDelegationsList());
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnconsolidatedDelegationsCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposDelegatorConsolidatesEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorConsolidatesEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposDelegatorConsolidatesEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorConsolidatesEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNewDelegation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
  f = this.getConsolidatedDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
  f = this.getUnconsolidatedDelegationsCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposDelegatorConsolidatesEvent} The clone.
 */
proto.DposDelegatorConsolidatesEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposDelegatorConsolidatesEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Delegation new_delegation = 1;
 * @return {proto.Delegation}
 */
proto.DposDelegatorConsolidatesEvent.prototype.getNewDelegation = function() {
  return /** @type{proto.Delegation} */ (
    jspb.Message.getWrapperField(this, proto.Delegation, 1));
};


/** @param {proto.Delegation|undefined} value  */
proto.DposDelegatorConsolidatesEvent.prototype.setNewDelegation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposDelegatorConsolidatesEvent.prototype.clearNewDelegation = function() {
  this.setNewDelegation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposDelegatorConsolidatesEvent.prototype.hasNewDelegation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Delegation consolidated_delegations = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Delegation>}
 */
proto.DposDelegatorConsolidatesEvent.prototype.getConsolidatedDelegationsList = function() {
  return /** @type{!Array.<!proto.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Delegation, 2));
};


/** @param {Array.<!proto.Delegation>} value  */
proto.DposDelegatorConsolidatesEvent.prototype.setConsolidatedDelegationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.DposDelegatorConsolidatesEvent.prototype.clearConsolidatedDelegationsList = function() {
  this.setConsolidatedDelegationsList([]);
};


/**
 * optional int64 unconsolidated_delegations_count = 3;
 * @return {number}
 */
proto.DposDelegatorConsolidatesEvent.prototype.getUnconsolidatedDelegationsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.DposDelegatorConsolidatesEvent.prototype.setUnconsolidatedDelegationsCount = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposDelegatorUnbondsEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposDelegatorUnbondsEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposDelegatorUnbondsEvent.displayName = 'proto.DposDelegatorUnbondsEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposDelegatorUnbondsEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposDelegatorUnbondsEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposDelegatorUnbondsEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposDelegatorUnbondsEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegation: (f = msg.getDelegation()) && proto.Delegation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposDelegatorUnbondsEvent}
 */
proto.DposDelegatorUnbondsEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposDelegatorUnbondsEvent;
  return proto.DposDelegatorUnbondsEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposDelegatorUnbondsEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposDelegatorUnbondsEvent}
 */
proto.DposDelegatorUnbondsEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Delegation;
      reader.readMessage(value,proto.Delegation.deserializeBinaryFromReader);
      msg.setDelegation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposDelegatorUnbondsEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorUnbondsEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposDelegatorUnbondsEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorUnbondsEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposDelegatorUnbondsEvent} The clone.
 */
proto.DposDelegatorUnbondsEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposDelegatorUnbondsEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Delegation delegation = 1;
 * @return {proto.Delegation}
 */
proto.DposDelegatorUnbondsEvent.prototype.getDelegation = function() {
  return /** @type{proto.Delegation} */ (
    jspb.Message.getWrapperField(this, proto.Delegation, 1));
};


/** @param {proto.Delegation|undefined} value  */
proto.DposDelegatorUnbondsEvent.prototype.setDelegation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposDelegatorUnbondsEvent.prototype.clearDelegation = function() {
  this.setDelegation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposDelegatorUnbondsEvent.prototype.hasDelegation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposReferrerRegistersEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DposReferrerRegistersEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposReferrerRegistersEvent.displayName = 'proto.DposReferrerRegistersEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposReferrerRegistersEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposReferrerRegistersEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposReferrerRegistersEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposReferrerRegistersEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    address: (f = msg.getAddress()) && proto_loom_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposReferrerRegistersEvent}
 */
proto.DposReferrerRegistersEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposReferrerRegistersEvent;
  return proto.DposReferrerRegistersEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposReferrerRegistersEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposReferrerRegistersEvent}
 */
proto.DposReferrerRegistersEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposReferrerRegistersEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposReferrerRegistersEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposReferrerRegistersEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposReferrerRegistersEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposReferrerRegistersEvent} The clone.
 */
proto.DposReferrerRegistersEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposReferrerRegistersEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.DposReferrerRegistersEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.DposReferrerRegistersEvent.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Address address = 2;
 * @return {proto.Address}
 */
proto.DposReferrerRegistersEvent.prototype.getAddress = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 2));
};


/** @param {proto.Address|undefined} value  */
proto.DposReferrerRegistersEvent.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.DposReferrerRegistersEvent.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposReferrerRegistersEvent.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DposDelegatorClaimsRewardsEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DposDelegatorClaimsRewardsEvent.repeatedFields_, null);
};
goog.inherits(proto.DposDelegatorClaimsRewardsEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DposDelegatorClaimsRewardsEvent.displayName = 'proto.DposDelegatorClaimsRewardsEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DposDelegatorClaimsRewardsEvent.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DposDelegatorClaimsRewardsEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DposDelegatorClaimsRewardsEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DposDelegatorClaimsRewardsEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegator: (f = msg.getDelegator()) && proto_loom_pb.Address.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto_loom_pb.Address.toObject, includeInstance),
    amountsList: jspb.Message.toObjectList(msg.getAmountsList(),
    proto_loom_pb.BigUInt.toObject, includeInstance),
    totalRewardsClaimed: (f = msg.getTotalRewardsClaimed()) && proto_loom_pb.BigUInt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DposDelegatorClaimsRewardsEvent}
 */
proto.DposDelegatorClaimsRewardsEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DposDelegatorClaimsRewardsEvent;
  return proto.DposDelegatorClaimsRewardsEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DposDelegatorClaimsRewardsEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DposDelegatorClaimsRewardsEvent}
 */
proto.DposDelegatorClaimsRewardsEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.setDelegator(value);
      break;
    case 2:
      var value = new proto_loom_pb.Address;
      reader.readMessage(value,proto_loom_pb.Address.deserializeBinaryFromReader);
      msg.getValidatorsList().push(value);
      msg.setValidatorsList(msg.getValidatorsList());
      break;
    case 3:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.getAmountsList().push(value);
      msg.setAmountsList(msg.getAmountsList());
      break;
    case 4:
      var value = new proto_loom_pb.BigUInt;
      reader.readMessage(value,proto_loom_pb.BigUInt.deserializeBinaryFromReader);
      msg.setTotalRewardsClaimed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DposDelegatorClaimsRewardsEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorClaimsRewardsEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDelegator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_loom_pb.Address.serializeBinaryToWriter
    );
  }
  f = this.getAmountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
  f = this.getTotalRewardsClaimed();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_loom_pb.BigUInt.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DposDelegatorClaimsRewardsEvent} The clone.
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.DposDelegatorClaimsRewardsEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Address delegator = 1;
 * @return {proto.Address}
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.getDelegator = function() {
  return /** @type{proto.Address} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.Address, 1));
};


/** @param {proto.Address|undefined} value  */
proto.DposDelegatorClaimsRewardsEvent.prototype.setDelegator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DposDelegatorClaimsRewardsEvent.prototype.clearDelegator = function() {
  this.setDelegator(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.hasDelegator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Address validators = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Address>}
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.getValidatorsList = function() {
  return /** @type{!Array.<!proto.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_loom_pb.Address, 2));
};


/** @param {Array.<!proto.Address>} value  */
proto.DposDelegatorClaimsRewardsEvent.prototype.setValidatorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.DposDelegatorClaimsRewardsEvent.prototype.clearValidatorsList = function() {
  this.setValidatorsList([]);
};


/**
 * repeated BigUInt amounts = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.BigUInt>}
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.getAmountsList = function() {
  return /** @type{!Array.<!proto.BigUInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_loom_pb.BigUInt, 3));
};


/** @param {Array.<!proto.BigUInt>} value  */
proto.DposDelegatorClaimsRewardsEvent.prototype.setAmountsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.DposDelegatorClaimsRewardsEvent.prototype.clearAmountsList = function() {
  this.setAmountsList([]);
};


/**
 * optional BigUInt total_rewards_claimed = 4;
 * @return {proto.BigUInt}
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.getTotalRewardsClaimed = function() {
  return /** @type{proto.BigUInt} */ (
    jspb.Message.getWrapperField(this, proto_loom_pb.BigUInt, 4));
};


/** @param {proto.BigUInt|undefined} value  */
proto.DposDelegatorClaimsRewardsEvent.prototype.setTotalRewardsClaimed = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.DposDelegatorClaimsRewardsEvent.prototype.clearTotalRewardsClaimed = function() {
  this.setTotalRewardsClaimed(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DposDelegatorClaimsRewardsEvent.prototype.hasTotalRewardsClaimed = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * @enum {number}
 */
proto.LocktimeTier = {
  TIER_ZERO: 0,
  TIER_ONE: 1,
  TIER_TWO: 2,
  TIER_THREE: 3
};

/**
 * @enum {number}
 */
proto.DelegationState = {
  BONDING: 0,
  BONDED: 1,
  UNBONDING: 2,
  REDELEGATING: 3
};

/**
 * @enum {number}
 */
proto.CandidateState = {
  REGISTERED: 0,
  UNREGISTERING: 1,
  ABOUT_TO_CHANGE_FEE: 2,
  CHANGING_FEE: 3
};

goog.object.extend(exports, proto);
