Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["启动","OPTIONNAME"], ["关闭","OPTIONNAME"]]), "NAME")
          .appendField("鼠标右键/移动端虚拟")
          .appendField(new Blockly.FieldDropdown([["A键","OPTIONNAME"], ["b键","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };