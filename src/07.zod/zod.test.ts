import * as z from 'zod';

describe('Zod Libraby examples', () => {
  it('Can convert object using zod', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number(),
    });

    const converted = Player.parse({ userName: 'Juan', xp: 100 });

    expect(converted).toBeDefined();
    expect(converted).not.toBeNull();
    expect(converted.userName).toBe('Juan');
    expect(converted.xp).toBe(100);
  });

  it('Throws exception when object is not valid', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number(),
    });

    const convert = () => Player.parse({ userName: 'Juan', xp: '191' });
    let error: unknown;
    try {
      convert();
    } catch (e) {
      error = e;
    }
    expect(error).toBeInstanceOf(z.ZodError);
    const zodError = error as z.ZodError;
    expect(zodError.issues.length).toBe(1);
    expect(zodError.issues[0].code).toBe('invalid_type');
    expect(zodError.issues[0].path).toEqual(['xp']);
    expect(zodError.issues[0].message).toBe(
      'Invalid input: expected number, received string'
    );
    expect(zodError.issues[0]).toHaveProperty('expected', 'number');
  });

  it('Safe parse okay', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number(),
    });

    const converted = Player.safeParse({ userName: 'Juan', xp: 100 });

    expect(converted.success).toBeTruthy();

    expect(converted.data).toBeDefined();
    expect(converted.data).toBeDefined();
    expect(converted.data).not.toBeNull();
    expect(converted.data?.userName).toBe('Juan');
    expect(converted.data?.xp).toBe(100);
  });

  it('Safe parse okay', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number(),
    });

    const converted = Player.safeParse({ userName: 'Juan', xp: 100 });

    expect(converted.success).toBeTruthy();

    expect(converted.data).toBeDefined();
    expect(converted.data).toBeDefined();
    expect(converted.data).not.toBeNull();
    expect(converted.data?.userName).toBe('Juan');
    expect(converted.data?.xp).toBe(100);
  });

  it('Safe parse negate', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number(),
    });

    const converted = Player.safeParse({ userName: 'Juan', xp: '12' });

    expect(converted.success).toBeFalsy();
  });

  it('Can parse with basic data types', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number(),
      isGood: z.boolean(),
      bornAt: z.date(),
      sexEnum: z.enum(['F', 'M']),
    });

    const converted = Player.safeParse({
      userName: 'A',
      xp: 18,
      isGood: true,
      bornAt: new Date(),
      sexEnum: 'F',
    });
    expect(converted.success).toBeTruthy();
  });

  it('Min Max Fails', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number().min(166).max(182),
      isGood: z.boolean(),
      bornAt: z.date(),
      sexEnum: z.enum(['F', 'M']),
    });

    const converted = Player.safeParse({
      userName: 'A',
      xp: 183,
      isGood: true,
      bornAt: new Date(),
      sexEnum: 'F',
    });
    expect(converted.success).toBeFalsy();
  });

  it('Min Max Fails', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number().min(166).max(182),
      isGood: z.boolean(),
      bornAt: z.date(),
      sexEnum: z.enum(['F', 'M']),
    });

    const converted = Player.safeParse({
      userName: 'A',
      xp: 183,
      isGood: true,
      bornAt: new Date(),
      sexEnum: 'F',
    });
    expect(converted.success).toBeFalsy();
  });

  it('Array of objects', () => {
    const Player = z.object({
      userName: z.string(),
      xp: z.number(),
      isGood: z.boolean(),
      bornAt: z.date(),
      sexEnum: z.enum(['F', 'M']),
    });

    const PlayesArraa = z.array(Player);

    const converted = PlayesArraa.safeParse([
      {
        userName: 'A',
        xp: 183,
        isGood: true,
        bornAt: new Date(),
        sexEnum: 'F',
      },
    ]);
    expect(converted.success).toBeTruthy();
  });

  it('Optionals', () => {
    const Player = z.object({
      userName: z.string().nullable(),
      xp: z.number(),
      isGood: z.boolean(),
      bornAt: z.date(),
      sexEnum: z.enum(['F', 'M']),
    });

    const PlayesArraa = z.array(Player);

    const converted = PlayesArraa.safeParse([
      {
        userName: null,
        xp: 183,
        isGood: true,
        bornAt: new Date(),
        sexEnum: 'F',
      },
    ]);
    expect(converted.success).toBeTruthy();
  });

  it('Infer', () => {
    const Player = z.object({
      userName: z.string().nullable(),
      xp: z.number(),
      isGood: z.boolean(),
      bornAt: z.date(),
      sexEnum: z.enum(['F', 'M']),
    });

    type ThePlayer = z.infer<typeof Player>;
    const fn = (a: ThePlayer) => {
      const result = Player.safeParse(a);
      expect(result).toBeTruthy();
    };

    fn({
      userName: null,
      xp: 183,
      isGood: true,
      bornAt: new Date(),
      sexEnum: 'F',
    });
  });
});
