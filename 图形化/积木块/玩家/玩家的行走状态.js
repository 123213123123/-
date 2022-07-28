Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("玩家的行走状态")
          .appendField(new Blockly.FieldDropdown([["\t非行走中","OPTIONNAME"], ["\t下蹲行走","OPTIONNAME"], ["\t正常步行","OPTIONNAME"], ["奔跑","OPTIONNAME"]]), "NAME");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };