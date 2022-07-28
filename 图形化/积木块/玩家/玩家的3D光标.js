Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["启动","OPTIONNAME"], ["关闭","OPTIONNAME"]]), "NAME")
          .appendField("玩家的3D光标");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };