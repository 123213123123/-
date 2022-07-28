Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("穿戴配件在玩家上的部位")
          .appendField(new Blockly.FieldDropdown([["臀部","OPTIONNAME"], ["躯干","OPTIONNAME"], ["颈部","OPTIONNAME"], ["头","OPTIONNAME"], ["左肩","OPTIONNAME"], ["左上臂","OPTIONNAME"], ["\t左下臂","OPTIONNAME"], ["\t左手","OPTIONNAME"], ["\t左上腿","OPTIONNAME"], ["左下腿","OPTIONNAME"], ["左脚","OPTIONNAME"], ["\t右肩膀","OPTIONNAME"], ["右上臂","OPTIONNAME"], ["\t右下臂","OPTIONNAME"], ["\t右手","OPTIONNAME"], ["\t右上腿","OPTIONNAME"], ["\t右下腿","OPTIONNAME"], ["\t右脚","OPTIONNAME"]]), "NAME");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };