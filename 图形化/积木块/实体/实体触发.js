Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("实体触发")
          .appendField(new Blockly.FieldDropdown([["说话","OPTIONNAME"], ["互动","OPTIONNAME"], ["受伤","OPTIONNAME"], ["死亡","OPTIONNAME"]]), "NAME")
          .appendField("事件时播放的音效");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };