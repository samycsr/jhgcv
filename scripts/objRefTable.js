const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{solo: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{jogador: 0},
	{Sprite: 0}
];

self.InstanceType = {
	solo: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}