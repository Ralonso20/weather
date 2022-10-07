export class ConditionClass {
  static createCondition(obj: Object): ConditionClass {
    return new ConditionClass(
    obj["code"],
    obj["text"],
    obj["temperature"],)
  }
  constructor(
    public code: number,
    public text: string,
    public temperature: number
  ) {}
}
