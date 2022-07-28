Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("玩家")
          .appendField(new Blockly.FieldDropdown([["可以","OPTIONNAME"], ["不可以","OPTIONNAME"]]), "NAME")
          .appendField("以聊天");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };